module.exports = {
  routes: [
    {
      method: "GET",
      path: "/lessons/:id",
      handler: "lesson.getContent",
      // By default, routes are protected by Strapi's authentication system
      // config: {
      //   auth: false,
      // },
    },
  ],
};
