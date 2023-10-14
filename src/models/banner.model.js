const mongoose = require("mongoose");

//  banner schema
const bannerSchema = mongoose.Schema(
  {
    banner_name: {
      type: String,
      trim: true,
    },
    banner_description: {
      type: String,
      trim: true,
    },
    banner_image: {
      type: String,
      trim: true,
    },
    food: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON :{
      transform : function(doc ,data){
         if(data?.banner_image){
             data.banner_image =`${config.base_url}Banner_Images/${data.banner_image}`;
         }
        }
      }
  }
);

const banner = mongoose.model("Banner", bannerSchema);

module.exports = banner;