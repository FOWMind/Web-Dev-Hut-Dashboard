module.exports = {
  routes: [
    {
      method: "GET",
      path: "/courses/identifier/:identifier",
      handler: "course.findOneByIdentifier",
    },
    {
      method: "GET",
      path: "/courses/technology/:technologyIdentifier",
      handler: "course.findByTechnologyIdentifier",
    },
  ],
};
