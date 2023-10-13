const mongoose = require("mongoose");

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
  }
);

const banner = mongoose.model("Banner", bannerSchema);

module.exports = banner;