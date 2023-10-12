const { Food } = require("../models");

/* ------------------------------- Create food ------------------------------ */
const createFood = async(reqbody) => {
    return Food.create(reqbody);
}

 /* ---------------------------- Get food by name ---------------------------- */
const getFoodByName = async(food_name) => {
    return Food.findOne({food_name})
}

/* ------------------------------ Get food list ----------------------------- */
const getFoodList = async() => {
    return Food.find().populate({
        path:"restaurant",
        select:["restaurant_name"]
    });
}

/* ----------------------------- Get food by id ----------------------------- */
const getFoodById = async(foodId) => {
    return Food.findById(foodId);
}

/* ---------------------------- Update food by id --------------------------- */
const updateFood = async(foodId,reqbody) => {
    return Food.findByIdAndUpdate(foodId,{$set:reqbody});
}

/* ------------------------------- Delete food ------------------------------ */
const deleteFood = async(foodId) => {
    return Food.findByIdAndDelete(foodId);
}


module.exports = {
    createFood,
    getFoodByName,
    getFoodList,
    getFoodById,
    updateFood,
    deleteFood
}