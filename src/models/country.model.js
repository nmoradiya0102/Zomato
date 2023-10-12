const mongoose = require("mongoose");

 /* ----------------------------- Country schema ----------------------------- */
const countrySchema = new mongoose.Schema(
    {
        country_name: {
            type:String,
            trim:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const country = mongoose.model("Country",countrySchema);
module.exports = country;