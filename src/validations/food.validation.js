const Joi = require("joi");

/* create food */
const createFood = {
    body : Joi.object().keys({
        food_name : Joi.string().required().trim(),
        food_price : Joi.number().required(),
        food_rating : Joi.number().required(),
        restaurant : Joi.string().required().trim(),
    }),
};

module.exports = {
    createFood
}