"use strict";

/**
 * lesson controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::lesson.lesson", ({ strapi }) => ({
  async getContent(ctx, next) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi
      .service("api::lesson.lesson")
      .findOne(id, query);

    if (entity.course) {
      const lessonContent = await strapi
        .service("api::lesson.lesson")
        .lessonContent(`${entity.course.identifier}/${entity.identifier}.md`);
      entity.content = lessonContent;
    }

    // @ts-ignore
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    // @ts-ignore
    return this.transformResponse(sanitizedEntity);
  },
}));
