# syntax=docker/dockerfile:1.7
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install minimal build tools if sharp ever compiles from source
RUN apk add --no-cache g++ make python3 util-linux util-linux-misc

# Disable Gatsby telemetry + make builds non-interactive
ENV GATSBY_TELEMETRY_DISABLED=1 \
    NODE_ENV=production \
    CI=1

# Leverage lockfile and cache for node_modules
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --include=dev

# Copy sources and build
COPY . .

# Reuse Gatsby cache across builds
# - /app/.cache is Gatsby’s cache dir
# - /tmp/gatsby-cache gives Sharp & friends extra scratch if needed
ENV SHARP_CONCURRENCY=4
ENV NODE_OPTIONS=--max_old_space_size=2048
RUN --mount=type=cache,target=/app/.cache \
    --mount=type=cache,target=/tmp/gatsby-cache \
    npm run build

# Runtime stage (Nginx, non-root)
FROM nginx:1.25-alpine

# Remove default vhost to avoid any surprises
RUN rm -f /etc/nginx/conf.d/default.conf

# Provide your own full nginx.conf that does NOT include conf.d/*
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder --chown=101:101 /app/public /usr/share/nginx/html

# Create a non-root user (nginx exists in alpine image, uid/gid 101)
USER 101:101

# Listen on unprivileged port (no root needed)
EXPOSE 8080

# Make FS effectively read-only at runtime; write dirs will be tmpfs via compose
# (left here as docs; actual mounts in compose)
# VOLUME ["/var/cache/nginx", "/var/run"]

HEALTHCHECK --interval=15s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
