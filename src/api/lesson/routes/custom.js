module.exports = {
  routes: [
    {
      method: "GET",
      path: "/lessons/:id",
      handler: "lesson.findOne",
      // By default, routes are protected by Strapi's authentication system
      // config: {
      //   auth: false,
      // },
    },
    {
      method: "GET",
      path: "/lessons/identifier/:identifier",
      handler: "lesson.findOneByIdentifier",
    },
  ],
};
