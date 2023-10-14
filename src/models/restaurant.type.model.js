const mongoose = require("mongoose");

/* restaurant Type schema */
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
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const restaurantType = mongoose.model("RestaurantType",restaurantTypeSchema);
module.exports = restaurantType;