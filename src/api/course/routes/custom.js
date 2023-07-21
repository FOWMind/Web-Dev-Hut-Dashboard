module.exports = {
  routes: [
    {
      method: "GET",
      path: "/courses/technology/:technologyIdentifier",
      handler: "course.findByTechnologyIdentifier",
    },
  ],
};
