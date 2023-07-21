// @ts-nocheck
"use strict";

/**
 * lesson controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::lesson.lesson", ({ strapi }) => ({
  async findOne(ctx, next) {
    const { id } = ctx.params;
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    const lesson = await strapi.service("api::lesson.lesson").findOne(id, {
      populate: {
        course: true,
        // course: {
        //   fields: ["identifier"],
        // },
      },
      ...sanitizedQueryParams,
    });

    if (lesson.course) {
      const lessonContent = await strapi
        .service("api::lesson.lesson")
        .lessonContent(`${lesson.course.identifier}/${lesson.identifier}.md`);
      lesson.content = lessonContent;
    }

    const sanitizedLesson = await this.sanitizeOutput(lesson, ctx);
    return this.transformResponse(sanitizedLesson);
  },
  async findOneByIdentifier(ctx, next) {
    const { identifier } = ctx.params;

    const lesson = await strapi.db.query("api::lesson.lesson").findOne({
      where: { identifier },
      populate: {
        course: true,
      },
    });

    if (lesson.course) {
      const lessonContent = await strapi
        .service("api::lesson.lesson")
        .lessonContent(`${lesson.course.identifier}/${lesson.identifier}.md`);
      lesson.content = lessonContent;
    }

    const sanitizedLesson = await this.sanitizeOutput(lesson, ctx);
    return this.transformResponse(sanitizedLesson);
  },
}));
