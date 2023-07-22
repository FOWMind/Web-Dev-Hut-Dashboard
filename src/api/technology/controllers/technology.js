// @ts-nocheck
"use strict";

/**
 * technology controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::technology.technology",
  ({ strapi }) => ({
    async findOneByIdentifier(ctx, next) {
      const { identifier } = ctx.params;
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const technology = await strapi.db
        .query("api::technology.technology")
        .findOne({
          where: {
            identifier: {
              $eqi: identifier,
            },
          },
          populate: {
            logo: true,
          },
          ...sanitizedQueryParams,
        });

      const sanitizedTechnology = await this.sanitizeOutput(technology, ctx);
      return this.transformResponse(sanitizedTechnology);
    },
    async findByArea(ctx, next) {
      const { area } = ctx.params;
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const technologies = await strapi
        .service("api::technology.technology")
        .find({
          filters: {
            areas: {
              $containsi: area,
            },
          },
          ...sanitizedQueryParams,
        });

      const sanitizedTechnologies = await this.sanitizeOutput(
        technologies,
        ctx
      );
      return this.transformResponse(sanitizedTechnologies);
    },
  })
);
