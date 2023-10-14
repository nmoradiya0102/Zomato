const { restaurantTypeService } = require("../services");

 /* Create restaurant type */
const createRestaurantType = async(req,res) => {
    try {
        const reqbody = req.body;
        // const restaurantTypeExist = await restaurantTypeService.getRestaurantTypeByName(reqbody.RestaurantType);
        // if(restaurantTypeExist){
        //     throw new Error("this type of restaurant already created..!");
        // }
        const restaurantType = await restaurantTypeService.createRestaurantType(reqbody);
        if(!restaurantType){
            throw new Error("Something went wrong..! ");
        }
        res.status(200).json({
            succcess:true,
            message:"Restaurant type created successfully..!",
            data:restaurantType
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

/*  Get restaurant type list  */
const getRestaurantTypeList = async(req,res) => {
    try {
        const restaurantTypeList = await restaurantTypeService.getRestaurantTypeList();
        if(!restaurantTypeList){
          throw new Error("Restaurant type list not found..!");
        }
        res.status(200).json({
          success: true,
          message: "Get restaurant type list successfully..!",
          data: restaurantTypeList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

 /* Update restaurant type */
const updateRestaurantType = async(req,res) => {
    try {
        const restaurantTypeId = req.params.restaurantTypeId;
        const reqbody = req.body;
        const restaurantTypeExist = await restaurantTypeService.getRestaurantTypeById(restaurantTypeId);
        if(!restaurantTypeExist){
            throw new Error("Restaurant type not found..! ");
        }
        const restaurantTypeUpdate = await restaurantTypeService.updateRestaurantType(restaurantTypeId,reqbody);
        if(!restaurantTypeUpdate){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            succcess:true,
            message:"Restaurant type updated successfully..!",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

 /* Delete restaurant type */
const deleteRestaurantType = async(req,res) => {
    try {
        const restaurantTypeId = req.params.restaurantTypeId;
        const restaurantTypeExist = await restaurantTypeService.getRestaurantTypeById(restaurantTypeId);
        if(!restaurantTypeExist){
            throw new Error("Restaurant type not found..!");
        }
        const restaurantTypeDelete = await restaurantTypeService.deleteRestaurantType(restaurantTypeId);
        if(!restaurantTypeDelete){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            succcess:true,
            message:"Restaurant type deleted successfully..!",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}


module.exports = {
    createRestaurantType,
    updateRestaurantType,
    deleteRestaurantType,
    getRestaurantTypeList
}