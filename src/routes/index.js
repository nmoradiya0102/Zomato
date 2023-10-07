const express = require("express")
const cityRoute = require("./city.route")
const stateRoute = require("./state.route");
const countryRoute = require("./country.route");
const restaurantRoute = require("./restaurant.route");
const restaurantTypeRoute = require("./restaurant.type.route");

const router = express.Router()

router.use("/city" , cityRoute);
router.use("/state" , stateRoute);
router.use("/country" , countryRoute);
router.use("/restaurant" , restaurantRoute);
router.use("/restaurant-type" , restaurantTypeRoute);

module.exports = router;