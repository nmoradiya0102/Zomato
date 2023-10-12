const { stateService } = require("../services");

/* ------------------------------ Create State ------------------------------ */
const createState = async(req , res) => {
    try{
        const reqbody = req.body;
        const stateExist = await stateService.getStateByName(reqbody.state_name);
        if(stateExist){
            throw new Error("this state already created..!");
        }
        const state = await stateService.createState(reqbody);
        if(!state){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            success : true,
            message : "State create successfully..!",
            data : state
        })
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        })
    }
};

 /* ----------------------------- Get State List ----------------------------- */
const getStateList = async(req , res) => {
    try{
        const stateList = await stateService.getStateList();
        if(!stateList){
            throw new Error("State not found..!");
        }
        res.status(200).json({
            success : true,
            message : "Gat state list successfully..!",
            data : stateList,
        });
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/* ------------------------------ update State ------------------------------ */
const updateState = async(req , res) =>{
    try{
        const stateId = req.params.stateId;
        const reqbody = req.body;
        const stateExist = await stateService.getStateById(stateId);
        if(!stateExist){
            throw new Error("State not found..!");
        }
        const updateState = await stateService.updateState(stateId , reqbody);
        if(!updateState){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            success : true,
            message : "Update state successfully..!",
            data : reqbody
        })
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        })
    }
};

/* ------------------------------ delete state ------------------------------ */
const deleteState = async(req , res) => {
    try{
        const stateId = req.params.stateId;
        const stateExist = await stateService.getStateById(stateId);
        if(!stateExist){
            throw new Error("State not found..!");
        }
        const deleteState = await stateService.deleteState(stateId);
        if(!deleteState){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            success : true,
            message : "State delete successfully..!",
        })
    } catch(error){
        res.state(400).json({
            success : false,
            message : error.message,
        })
    }
};

module.exports = {
    createState,
    getStateList,
    updateState,
    deleteState
}