const { Banner } = require("../models");


/** Create banner */
const createBanner = async (reqBody) => {
    return Banner.create(reqBody);
  };

/** Get Banner list */
const getBannerList = async () => {
  return Banner.find().populate("product")
};



module.exports = {
    createBanner,
    getBannerList
};
