const { Error } = require("mongoose");
const { restaurantService } = require("../services");

// Create restaurant
const createRestaurant = async(req,res) => {
    try {
        // if(req.files.length < 2){
        //     throw new Error("Restaurant and food both images are required -!- ")
        // }
        // const reqbody = req.body;
        // reqbody.restaurant_image = req.files[0].filename
        // reqbody.food_image = req.files[1].filename
        const restaurantExist = await restaurantService.getRestaurantByName(reqbody.restaurant_name);
        if(restaurantExist){
            throw new Error("This Name Restaurant already created..!");
        }
        const restaurant = await restaurantService.createRestaurant(reqbody);
        if(!restaurant){
            throw new Error("Something went wrong..! ");
        }
        res.status(200).json({
            succcess:true,
            message:"Restaurant created successfully..! ",
            data:restaurant
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Get restaurant list
const getRestaurantList = async(req,res) => {
    try {
        const restaurantList = await restaurantService.getRestaurantList();
        if(!restaurantList){
          throw new Error("Restaurant list data not found..!");
        }
        res.status(200).json({
          success: true,
          message: "Get restaurant list successfully..!",
          data: restaurantList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

// Update restaurant
const updateRestaurant = async(req,res) => {
    try {
        const restaurantId = req.params.restaurantId;
        const reqbody = req.body;
        const restaurantExist = await restaurantService.getRestaurantById(restaurantId);
        if(!restaurantExist){
            throw new Error("Restaurant not found..!");
        }
        const restaurantUpdate = await restaurantService.updateRestaurant(restaurantId,reqbody);
        if(!restaurantUpdate){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            succcess:true,
            message:"Restaurant updated successfully..!",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update restaurant status
const updateStatus = async(req,res) => {
    try {
        const restaurantId = req.params.restaurantId;
        const restaurantExist = await restaurantService.getRestaurantById(restaurantId);
        if(!restaurantExist){
            throw new Error("Restaurant not found..!");
        }
        const restaurantUpdated = await restaurantService.update_status(restaurantId)
        if(!restaurantUpdated){
            throw new Error("Something went wrong..!")
        }
        res.status(200).json({
            success:true,
            messgae:"Restaurant status updated successfully..!"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

// Delete restaurant
const deleteRestaurant = async(req,res) => {
    try {
        const restaurantId = req.params.restaurantId;
        const restaurantExist = await restaurantService.getRestaurantById(restaurantId);
        if(!restaurantExist){
            throw new Error("Restaurant not found..! ");
        }
        const restaurantDelete = await restaurantService.deleteRestaurant(restaurantId);
        if(!restaurantDelete){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            succcess:true,
            message:"Restaurant deleted successfully..!",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}


module.exports = {
    createRestaurant,
    getRestaurantList,
    updateRestaurant,
    updateStatus,
    deleteRestaurant,
}