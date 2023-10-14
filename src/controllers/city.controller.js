const { cityService } = require("../services");

/* Create City*/
const createCity = async(req , res) => {
    try {
        const reqbody = req.body;
        // const cityExist = await cityService.getCityByName(reqbody.city_name);
        // if(!cityExist){
        //     throw new Error("this city already Created..!");
        // }
        const city = await cityService.createCity(reqbody);
        if(!city){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            success : true,
            message : "City create successfully..!",
            data : city
        })
    }
    catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        })
    }
};

/*  Get City List */
const getCityList = async(req , res) => {
    try{
        const cityList = await cityService.getCityList();
        if(!cityList){
            throw new Error("City list not found..!");
        }
        res.status(200).json({
            success : true,
            message : "Get City list successfully..!",
            data : cityList,
        });
    }catch(error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
}

 /* Update City*/
const updateCity = async(req , res) => {
    try {
        const cityId = req.params.cityId;
        const reqbody = req.body;
        const cityExist = await cityService.getCityById(cityId);
        if(!cityExist){
            throw new Error("City not found..!");
        }
        res.status(200).json({
            success : true,
            message : "city update Successfully..!",
            data : reqbody
        })
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        })
    }
}

/* delete City*/
const deleteCity = async(req , res) =>{
    try {
        const cityId = req.params.cityId;
        const cityExist = await cityService.getCityById(cityId);
        if(!cityExist){
            throw new Error("City not found..!");
        }
        const cityDelete = await cityService.deleteCity(cityId);
        if(!cityDelete){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            success : true,
            message : "City delete successfully..!",
        })
    } catch(error) {
        res.status(400).json({
            success : false,
            message : error.message,
        })
    }
}


module.exports = {
    createCity,
    getCityList,
    updateCity,
    deleteCity
}