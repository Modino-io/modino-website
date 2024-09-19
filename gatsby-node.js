const path = require("path");

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "build-javascript") {
    // turn off source-maps
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const articles = graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "article" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMdx.nodes.forEach((node) => {
      createPage({
        path: `articles/${node.frontmatter.slug}`,
        component: `${path.resolve(
          "./src/templates/article/article.tsx"
        )}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  });

  const jobs = graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "job-offer" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMdx.nodes.forEach((node) => {
      createPage({
        path: `jobs/${node.frontmatter.slug}`,
        component: `${path.resolve(
          "./src/templates/job/job.tsx"
        )}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  });

  return Promise.all([articles, jobs]);
};
