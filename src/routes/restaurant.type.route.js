const express = require("express");
const validate = require("../middlewares/validate");
const { restaurantTypeValidation } = require("../validations");
const { restaurantTypeController } = require("../controllers");
const router = express.Router()

// Create restaurant type
router.post(
    "/create-restaurant-type",
    validate(restaurantTypeValidation.createRestaurantType),
    restaurantTypeController.createRestaurantType
)
// Update restaurant type with id
router.put(
    "/update-restaurant-type/:restaurant_typeId",
    validate(restaurantTypeValidation.createRestaurantType),
    restaurantTypeController.updateRestaurantType
)
// Delete restaurant type by id
router.delete(
    "/delete-restaurant-type/:restaurant_typeId",
    restaurantTypeController.deleteRestaurantType
)

//  get list
router.get(
    "/list",
    restaurantTypeController.getRestaurantTypeList
)

module.exports = router;