const Joi = require("joi");

//  Create restaurant
const createRestaurant = {
    body: Joi.object().keys({
        restaurant_name : Joi.string().required().trim(),
        restaurant_address : Joi.string().required().trim(),
        restaurant_contact_no : Joi.number().required().integer(),
        owner_name : Joi.string().required().trim(),
        owner_email : Joi.string().required().trim(),
        owner_contact_no : Joi.number().integer().required(),
        restaurant_image : Joi.optional(),
        restaurant_type : Joi.string().required().trim(),
        city : Joi.string().required().trim(),
    })
}

module.exports = {
    createRestaurant
}