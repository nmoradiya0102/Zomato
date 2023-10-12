const mongoose = require("mongoose")

/* ------------------------------- food schema ------------------------------ */
const foodSchema = new mongoose.Schema(
    {
        food_name:{
            type : String,
            trim : true
        },
        food_price:{
            type : Number,
            default : 10
        },
        food_rating : {
            type : Number,
            default : 1
        },
        restaurant:{
            type : mongoose.Types.ObjectId,
            ref : "Restaurant"
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const food = mongoose.model("Food",foodSchema);
module.exports = food