const { RestaurantType } = require("../models");

/* ------------------------- Create restaurant type ------------------------- */
const createRestaurantType = async(reqbody) => {
    return RestaurantType.create(reqbody);
}

 /* ----------------------- Get restaurant type by name ---------------------- */
const getRestaurantTypeByName = async(RestaurantType) => {
    return RestaurantType.findOne({RestaurantType})
}

/* ------------------------ Get restaurant type list ------------------------ */
const getRestaurantTypeList = async() => {
    return RestaurantType.find();
}

 /* ------------------------ Get restaurant type by id ----------------------- */
const getRestaurantTypeById = async(RestaurantTypeId) => {
    return RestaurantType.findById(RestaurantTypeId);
}

/* ------------------------- Update restaurant type ------------------------- */
const updateRestaurantType = async(RestaurantTypeId,reqbody) => {
    return RestaurantType.findByIdAndUpdate(RestaurantTypeId,{$set:reqbody});
}

/* ------------------------- Delete restaurant type ------------------------- */
const deleteRestaurantType = async(RestaurantTypeId) => {
    return RestaurantType.findByIdAndDelete(RestaurantTypeId);
}



module.exports = {
    createRestaurantType,
    getRestaurantTypeByName,
    getRestaurantTypeList,
    getRestaurantTypeById,
    updateRestaurantType,
    deleteRestaurantType
}