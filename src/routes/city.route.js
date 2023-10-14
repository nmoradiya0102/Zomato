const express = require("express");
const validate = require("../middlewares/validate");
const { cityValidation } = require("../validations");
const { cityController } = require("../controllers");
const router = express.Router()

/* create city */
router.post(
    "/create-city",
    validate(cityValidation.createCity),
    cityController.createCity
)

/* get city List */
router.get(
    "/list",
    cityController.getCityList
)

/* update city */
router.put(
    "update-city/:cityId",
    validate(cityValidation.createCity),
    cityController.updateCity
)

/* delete city */
router.delete(
    "/delete-city/:cityId",
    cityController.deleteCity
)

module.exports = router;