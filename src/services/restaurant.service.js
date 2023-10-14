const { Restaurant } = require("../models");

/* Create Restaurant */
const createRestaurant = async(reqbody) => {
    return Restaurant.create(reqbody);
}

/* Get Restaurant by name */
const getRestaurantByName = async(restaurant_name) => {
    return Restaurant.findOne({restaurant_name})
}

/* Get Restaurant list */
const getRestaurantList = async() => {
    return Restaurant.find().populate("RestaurantType").populate("City");
}

/* Get Restaurant by Id */
const getRestaurantById = async(restaurantId) => {
    return Restaurant.findById(restaurantId);
}

/* Update restaurant by id */
const updateRestaurant = async(restaurantId,reqbody) => {
    return Restaurant.findByIdAndUpdate(restaurantId,{$set:reqbody});
}

/* Update restaurant status by id */
const updateStatus = async(restaurantId) => {
    const restaurant = await getRestaurantById(restaurantId);
    if(!restaurant){
        throw new Error("Restaurant not found..!")
    }
    return Restaurant.findByIdAndUpdate(restaurantId,{$set:{restaurant_status: !restaurant.restaurant_status}},);
}

/* Delete restaurant */
const deleteRestaurant = async(restaurantId) => {
    return Restaurant.findByIdAndDelete(restaurantId);
}

module.exports = {
    createRestaurant,
    getRestaurantByName,
    getRestaurantList,
    getRestaurantById,
    updateRestaurant,
    updateStatus,
    deleteRestaurant
}