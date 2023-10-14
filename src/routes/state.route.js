const express = require("express");
const validate = require("../middlewares/validate");
const { stateValidation } = require("../validations");
const { stateController } = require("../controllers");
const router = express.Router()

/* create state */
router.post(
    "/create-state",
    validate(stateValidation.createState),
    stateController.createState
)

/*  state list  */
router.get(
    "/list",
    stateController.getStateList
)

/* update state */
router.put(
    "/update-state/:stateId",
    validate(stateValidation.createState),
    stateController.updateState
)

/* delete state */
router.delete(
    "/delete-state/:stateId",
    stateController.deleteState
)

module.exports = router;