const mongoose = require("mongoose");

//  menu schema
const MenuSchema = new mongoose.Schema(
    {
        menu_name: {
            type: String,
            trim: true,
        },
        menu_image : {
            type: String,
            trim: true
        },
        food: {
            type: mongoose.Types.ObjectId,
            ref: "Food",
        },
        menu_description : {
            type: String,
            trim: true,
        },
        menu_price: {
            type: Number,
            trim: true,
        },
        restorant: {
            type : mongoose.Types.ObjectId,
            ref : "Restaurant",
        },
        restorant_type: {
            type : mongoose.Types.ObjectId,
            ref : "RestaurantType"
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON :{
            transform : function(doc ,data){
               if(data?.menu_image){
                   data.menu_image =`${config.base_url}Menu_Images/${data.menu_image}`;
               }
            }
       }
    },
);

const Menu = mongoose.model("menu", MenuSchema);
module.exports = Menu;