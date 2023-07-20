module.exports = ({ env }) => ({
  repositories: {
    lessons: {
      owner: env("GITHUB_LESSON_REPOSITORY_OWNER"),
      name: env("GITHUB_LESSON_REPOSITORY_NAME"),
    },
  },
});
