const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
    },
    expire_time: {
      type: Date,
      default: null,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    is_active: {
      type: Boolean,
      default: true,
  },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;