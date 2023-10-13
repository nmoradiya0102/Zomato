const { foodService } = require("../services");

 /* ------------------------------- Create food ------------------------------ */
const createFood = async(req,res) => {
    try {
        const reqbody = req.body;
        const food = await foodService.createFood(reqbody);
        if(!food){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            succcess:true,
            message:"Food created successfully..!",
            data:food
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

/* ------------------------------ Get food list ----------------------------- */
const getFoodList = async(req,res) => {
    try {
        const foodList = await foodService.getFoodList();
        if(!foodList){
          throw new Error("Food list data not found..!");
        }
        res.status(200).json({
          success: true,
          message: "Get food data successfully..!",
          data: foodList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

 /* ------------------------------- Update food ------------------------------ */
const updateFood = async(req,res) => {
    try {
        const foodId = req.params.foodId;
        const reqbody = req.body;
        const foodExist = await foodService.getFoodById(foodId);
        if(!foodExist){
            throw new Error("Food not found..!");
        }
        const foodUpdate = await foodService.updateFood(foodId,reqbody);
        if(!foodUpdate){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            succcess:true,
            message:"Food updated successfully..!",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
 /* ------------------------------- Delete food ------------------------------ */
const deleteFood = async(req,res) => {
    try {
        const foodId = req.params.foodId;
        const foodExist = await foodService.getFoodById(foodId);
        if(!foodExist){
            throw new Error("Food data not found..!");
        }
        const foodDelete = await foodService.deleteFood(foodId);
        if(!foodDelete){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            succcess:true,
            message:"Food deleted successfully..!",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}


module.exports = {
    createFood,
    getFoodList,
    updateFood,
    deleteFood
}