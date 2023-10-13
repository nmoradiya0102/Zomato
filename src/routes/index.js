const express = require("express")
const cityRoute = require("./city.route")
const stateRoute = require("./state.route");
const countryRoute = require("./country.route");
const restaurantRoute = require("./restaurant.route");
const restaurantTypeRoute = require("./restaurant.type.route");
const userRoute = require("./user.route");
const orderRoute = require("./order.route");
const cartRoute = require("./cart.route");
const foodRoute = require("./food.route");
const tokenRoute = require("./token.route");
const bannerRoute = require("./banner.route");
const adminRoute = require("./admin.route");
const favoriteRoute = require("./favorite.route");

const router = express.Router()

router.use("/city" , cityRoute);
router.use("/state" , stateRoute);
router.use("/country" , countryRoute);
router.use("/restaurant" , restaurantRoute);
router.use("/restaurant-type" , restaurantTypeRoute);
router.use("/user" , userRoute);
router.use("/order" , orderRoute);
router.use("/cart" , cartRoute);
router.use("/food" , foodRoute);
router.use("/token" , tokenRoute);
router.use("/banner" , bannerRoute);
router.use("/admin" , adminRoute);
router.use("/favorite" , favoriteRoute);
module.exports = router;