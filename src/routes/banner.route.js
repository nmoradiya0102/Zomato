const express = require("express");
const { upload } = require("../middlewares/upload");
const validate = require("../middlewares/validate");
const { bannerValidation } = require("../validations");
const { bannerController } = require("../controllers");

const router = express.Router();

/* Create banner */
router.post(
  "/create",
  upload.single("banner_image"),
  validate(bannerValidation.createBanner),
  bannerController.createBanner
);

/* Get banner list */
router.get(
  "/list",
  validate(bannerValidation.getList),
  bannerController.getBannerList
);

module.exports = router;
