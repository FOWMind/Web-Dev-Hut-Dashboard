module.exports = {
  routes: [
    {
      method: "GET",
      path: "/technologies/identifier/:identifier",
      handler: "technology.findOneByIdentifier",
    },
    {
      method: "GET",
      path: "/technologies/area/:area",
      handler: "technology.findByArea",
    },
  ],
};
