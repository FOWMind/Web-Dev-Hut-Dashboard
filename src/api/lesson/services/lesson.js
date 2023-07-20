"use strict";

const octokit = require("../../../lib/github");

/**
 * lesson service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::lesson.lesson", ({ strapi }) => ({
  /**
   * @param {string} filePath
   * The lesson content file path.
   */
  async lessonContent(filePath) {
    try {
      const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/contents/{path}",
        {
          owner: strapi.config.get("github.repositories.lessons.owner"),
          repo: strapi.config.get("github.repositories.lessons.name"),
          path: filePath,
        }
      );

      // @ts-ignore
      const content = Buffer.from(data.content, data.encoding).toString("utf8");
      return content;
    } catch (err) {
      console.error(err);
    }
  },
}));
