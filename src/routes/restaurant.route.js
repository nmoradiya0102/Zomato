const express = require("express");
const validate = require("../middlewares/validate");
const { restaurantValidation } = require("../validations");
const { restaurantController } = require("../controllers");
// const { upload } = require("../../middlewares/upload");
const router = express.Router()

/* Create restaurant */
router.post(
    "/create-restaurant",
    // upload.array("restaurant_image",2),
    validate(restaurantValidation.createRestaurant),
    restaurantController.createRestaurant
)

/*  Restaurant list */
router.get(
    "/list",
    restaurantController.getRestaurantList
)

/* Update restaurant with id  */
router.put(
    "/update-restaurant/:restaurantId",
    validate(restaurantValidation.createRestaurant),
    restaurantController.updateRestaurant
)

/* update restaurant status */
router.put(
    "/update-restaurant-status/:restaurantId",
    restaurantController.updateStatus
)

/* Delete restaurant by id */
router.delete(
    "/delete-restaurant/:restaurantId",
    restaurantController.deleteRestaurant
)



module.exports = router;