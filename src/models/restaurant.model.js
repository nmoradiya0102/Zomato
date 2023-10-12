const mongoose = require("mongoose");

/* ---------------------------- restaurant Schema --------------------------- */
const restaurantSchema = mongoose.Schema(
    {
        restaurant_name : {
            type : String,
            trim : true
        },
        restaurant_address : {
            type : String,
            trim : true
        },
        restaurant_contact_no : {
            type : Number,
            default : 0
        },
        owner_name : {
            type : String,
            trim : true
        },
        owner_email : {
            type : String,
            trim : true
        },
        owner_contact_no : {
            type : Number,
            trim : 0
        },
        whatsapp_notification : {
            type : Boolean,
            default : true
        },
        restaurant_image : {
            type : String,
            trim : true
        },
        RestaurantType : {
            type : mongoose.Types.ObjectId,
            ref : "RestaurantType"
        },
        City : {
            type : mongoose.Types.ObjectId,
            ref : "City"
        },
        restaurant_status : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const restaurant = mongoose.model("Restaurant" , restaurantSchema);
module.exports = restaurant;