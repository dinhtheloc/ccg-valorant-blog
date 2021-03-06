'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        data.slug = slugify(data.name);
      }
    },
    beforeUpdate: async (params, data) => {
      data.slug = slugify(data.name);
    },
  },
};