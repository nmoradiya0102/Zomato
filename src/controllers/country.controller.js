const { countryService } = require("../services");

 /* ----------------------------- Create Country ----------------------------- */
const createCountry = async(req,res) => {
    try {
        const reqbody = req.body;
        const countryExist = await countryService.getCountryByName(reqbody.country_name);
        if(countryExist){
            throw new Error("Country on this name already exist -!- ");
        }
        const country = await countryService.createCountry(reqbody);
        if(!country){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Country created successfully ^-^ ",
            data:country
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}


 /* ---------------------------- Get Country List ---------------------------- */
const getCountryList = async(req,res) => {
    try {
        const countryList = await countryService.getCountryList();
        if(!countryList){
          throw new Error("Country list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get country list dispatch successfully ^-^ ",
          data: countryList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

/* ----------------------------- Update Country ----------------------------- */
const updateCountry = async(req,res) => {
    try {
        const countryId = req.params.countryId;
        const reqbody = req.body;
        const countryExist = await countryService.getCountryById(countryId);
        if(!countryExist){
            throw new Error("Country does not exist -!- ");
        }
        const countryUpdate = await countryService.updateCountry(countryId,reqbody);
        if(!countryUpdate){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Country updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

 /* ----------------------------- Delete country ----------------------------- */
const deleteCountry = async(req,res) => {
    try {
        const countryId = req.params.countryId;
        const countryExist = await countryService.getCountryById(countryId);
        if(!countryExist){
            throw new Error("Country does not exist -!- ");
        }
        const countryDelete = await countryService.deleteCountry(countryId);
        if(!countryDelete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Country deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}


module.exports = {
    createCountry,
    getCountryList,
    updateCountry,
    deleteCountry
}