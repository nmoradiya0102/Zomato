const mongoose = require("mongoose");

/* ------------------------------- City schema ------------------------------ */
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
        State: {
            type : mongoose.Types.ObjectId,
            ref : "State"
        },
        Country: {
            type : mongoose.Types.ObjectId,
            ref : "Country"
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const City = mongoose.model("City" , citySchema);
module.exports = City;