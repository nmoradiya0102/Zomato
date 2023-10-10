const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create user */
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);
/** Get user list */
router.get(
    "/list",
    userController.getUserList
);
router.delete(
    "/delete-user/:userId",
    userController.deleteUser
);
router.put(
    "/update-user/:userId",
    validate(userValidation.createUser),
    userController.updateUser
)
router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userController.sendMail
  );
module.exports = router;
