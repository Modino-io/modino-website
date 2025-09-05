.PHONY: up reup down clean ps logs

up:
	@DOCKER_BUILDKIT=1 COMPOSE_DOCKER_CLI_BUILD=1 docker compose up --build; \
	ec=$$?; \
	if [ $$ec -eq 130 ]; then \
		echo "Interrupted (Ctrl-C). Containers stopped cleanly."; \
		exit 0; \
	else \
		exit $$ec; \
	fi

reup:
	@docker compose down --remove-orphans; \
	DOCKER_BUILDKIT=1 COMPOSE_DOCKER_CLI_BUILD=1 docker compose up --build; \
	ec=$$?; \
	if [ $$ec -eq 130 ]; then \
		echo "Interrupted (Ctrl-C). Containers stopped cleanly."; \
		exit 0; \
	else \
		exit $$ec; \
	fi

down:
	@docker compose down --remove-orphans

ps:
	@docker compose ps

logs:
	@docker compose logs -f

clean:
	@docker compose down --rmi local --volumes --remove-orphans; \
	docker builder prune -f
