const { Country } = require("../models");

// Create Country
const createCountry = async(reqbody) => {
    return Country.create(reqbody);
}

//  Get Country by name
const getCountryByName = async(country_name) => {
    return Country.findOne({country_name})
}

//  Get country list
const getCountryList = async() => {
    return Country.find();
}

// Get county by id
const getCountryById = async(country_id) => {
    return Country.findById(country_id);
}

//  update country
const updateCountry = async(country_id,reqbody) => {
    return Country.findByIdAndUpdate(country_id,{$set:reqbody});
}

//  Delete country
const deleteCountry = async(country_id) => {
    return Country.findByIdAndDelete(country_id);
}

module.exports = {
    createCountry,
    getCountryByName,
    getCountryList,
    getCountryById,
    updateCountry,
    deleteCountry
}