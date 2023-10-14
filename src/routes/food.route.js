const express = require("express");
const validate = require("../middlewares/validate");
const { foodValidation } = require("../validations");
const { foodController } = require("../controllers");
const router = express.Router()

/* Create food */
router.post(
    "/create-food",
    validate(foodValidation.createFood),
    foodController.createFood
)

 /* Food list  */
router.get(
    "/list",
    foodController.getFoodList
)

/* Update food with id */
router.put(
    "/update-food/:foodId",
    validate(foodValidation.createFood),
    foodController.updateFood
)

/*  Delete food by id */
router.delete(
    "/delete-food/:foodId",
    foodController.deleteFood
)

module.exports = router;