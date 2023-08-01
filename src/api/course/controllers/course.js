// @ts-nocheck
"use strict";

/**
 * course controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::course.course", ({ strapi }) => ({
  async findOneByIdentifier(ctx, next) {
    const { identifier } = ctx.params;
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    const course = await strapi.db.query("api::course.course").findOne({
      where: {
        identifier: {
          $eqi: identifier,
        },
      },
      populate: {
        lessons: {
          fields: ["title", "identifier"],
        },
      },
      ...sanitizedQueryParams,
    });

    const sanitizedCourse = await this.sanitizeOutput(course, ctx);
    return this.transformResponse(sanitizedCourse);
  },
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
