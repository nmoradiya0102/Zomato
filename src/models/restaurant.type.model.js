const mongoose = require("mongoose");

const restaurantTypeSchema = mongoose.Schema(
    {
        restaurant_type : {
            type : String,
            trim : true
        },
        type_desciption : {
            type : String,
            trim : true
        },
        cuisine_type : {
            type : String,
            trim : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const restaurantType = mongoose.model("RestaurantType",restaurantTypeSchema);
module.exports = restaurantType;