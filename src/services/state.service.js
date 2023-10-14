const { State } = require("../models");

/* create state */
const createState = async(reqbody) => {
    return State.create(reqbody);
}

/* get state by name */
const getStateByName = async(state_name) => {
    return State.findOne({state_name})
}

/*  get state list  */
const getStateList = async() => {
    return State.find().populate("Country");
}

/*  get state by id */
const getStateById = async(stateId) => {
    return State.findById(stateId);
}

/* update state */
const updateState = async(stateId,reqbody) => {
    return State.findByIdAndUpdate(stateId,{$set:reqbody});
}

/* delete state */
const deleteState = async(stateId) => {
    return State.findByIdAndDelete(stateId);
}

module.exports = {
    getStateByName,
    createState,
    getStateList,
    getStateById,
    updateState,
    deleteState
}