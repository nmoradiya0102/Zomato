const Joi = require("joi");

/* create country */
const createCountry = {
  body: Joi.object().keys({
    country_name: Joi.string().required().trim(),
  }),
};

module.exports = {
    createCountry
}