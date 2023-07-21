// @ts-nocheck
"use strict";

/**
 * course controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::course.course", ({ strapi }) => ({
  async findByTechnologyIdentifier(ctx, next) {
    const { technologyIdentifier } = ctx.params;
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    const courses = await strapi.service("api::course.course").find({
      filters: {
        technologies: {
          identifier: {
            $eqi: technologyIdentifier,
          },
        },
      },
      populate: {
        technologies: {
          fields: ["identifier"],
        },
      },
      ...sanitizedQueryParams,
    });

    const sanitizedCourses = await this.sanitizeOutput(courses, ctx);
    return this.transformResponse(sanitizedCourses);
  },
}));
