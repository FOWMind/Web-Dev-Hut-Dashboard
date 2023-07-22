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
  })
);
