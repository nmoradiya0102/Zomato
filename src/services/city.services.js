const { City } = require("../models");

//  Create city
const createCity = async(reqbody) => {
    return City.create(reqbody);
}

//  Get city by name
const getCityByName = async(city_name) => {
    return City.findOne({city_name})
}

// get city list
const getCityList = async() => {
    return City.find().populate("State").populate("Country");
}

// get city by Id
const getCityById = async(cityId) => {
    return City.findById(cityId);
}

// Update City
const updateCity = async(cityId , reqbody) => {
    return City.findByIdAndUpdate(cityId,{$set : reqbody});
}

// delete City
const deleteCity = async(cityId) => {
    return City.findByIdAndDelete(cityId);
}

module.exports = {
    createCity,
    getCityById,
    getCityByName,
    getCityList,
    updateCity,
    deleteCity
}