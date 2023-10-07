const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
    mongoose
    .connect(config.mongodb.url, config.mongodb.options)
    .then((data) => {
        console.log("Database connection succesfully..!");
    })
    .catch((error) => {
        console.log("Database connection erroe : " , error);
    });
};

module.exports = { connectDB }