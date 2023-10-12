const mongoose = require("mongoose");

 /* ------------------------------ state schema ------------------------------ */
const stateSchema = new mongoose.Schema(
    {
        state_name: {
            type:String,
            trim:true
        },
        Country: {
            type:mongoose.Types.ObjectId,
            ref:"Country"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const state = mongoose.model("State",stateSchema);
module.exports = state;