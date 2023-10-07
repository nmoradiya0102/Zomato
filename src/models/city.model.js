const mongoose = require("mongoose");

// City schema
const citySchema = new mongoose.Schema(
    {
        city_name: {
            type : String,
            trim : true
        },
        area_pincode : {
            type : Number,
            default : 0
        },
        state: {
            type : mongoose.Types.ObjectId,
            ref : "State"
        },
        country: {
            type : mongoose.Types.ObjectId,
            ref : "Country"
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const city = mongoose.model("City" , citySchema);
module.exports = city;