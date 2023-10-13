const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth")

const router = express.Router();

 /* ------------------------------- create user ------------------------------ */
router.post(
    "/create-user",
    // auth(),
    validate(userValidation.createUser),
    userController.createUser
);

 /* ------------------------------ Get user list ----------------------------- */
router.get(
    "/list",
    userController.getUserList
);

/* ------------------------------- delete user ------------------------------ */
router.delete(
    "/delete-user/:userId",
    userController.deleteUser
);

/* ------------------------------- update user ------------------------------ */
router.put(
    "/update-user/:userId",
    validate(userValidation.createUser),
    userController.updateUser
)

/* -------------------------------- mail send ------------------------------- */
router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userController.sendMail
  );
module.exports = router;
