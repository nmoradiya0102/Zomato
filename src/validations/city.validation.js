const Joi = require("joi");

//  Create city
const createCity = {
    body : Joi.object().keys({
        city_name : Joi.string().required().trim(),
        area_pincode : Joi.number().integer().required(),
        state : Joi.string().required().trim(),
        country : Joi.string().required().trim()
    })
};

module.exports = {
    createCity
};