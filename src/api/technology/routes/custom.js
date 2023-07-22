module.exports = {
  routes: [
    {
      method: "GET",
      path: "/technologies/identifier/:identifier",
      handler: "technology.findOneByIdentifier",
    },
  ],
};
