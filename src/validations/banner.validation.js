const Joi = require("joi");

/** Create Banner */
const createBanner = {
  body: Joi.object({
    banner_name: Joi.string().required().trim(),
    banner_description: Joi.string().optional(),
    banner_image : Joi.string().required().allow(""),
    food: Joi.string().required(),
  }),
};



module.exports = {
  createBanner,
};
