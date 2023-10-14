const { userService , emailService } = require("../services");

/*  Create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    const userExists = await userService.getUserByEmail(reqBody.email);
    if (userExists) {
      throw new Error("User already created by this email..!");
    }
    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "User create successfully..!",
      data: reqBody,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* user list  */
const getUserList = async (req, res) => {
  try {
    const userlist = await userService.getUserList();
    if(!userlist){
      throw new Error("User list data not found -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Get user list dispatch successfully ^-^ ",
      data: userlist,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get user by id */
const getUserDetails = async (req, res) => {
  try {
    const getDetails = await userService.getUserById(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found -!-");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

 /* user details update by id */
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.updateDetails(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!"
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

 /* update user */
const updateUser = async (req, res) => {
  try {
    const reqbody = req.body
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User does not exist -!- ");
    }
    await userService.updateUser(userId,reqbody);
    res.status(200).json({
      success: true,
      message: "User updated successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

 /* delete user */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User does not exist -!- ");
    }
    await userService.deleteUser(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


/* Send mail to reqested email */
const sendMail = async (req, res) => {
    try {
      const reqBody = req.body;
      const sendEmail = await emailService.sendMail(
        reqBody.email,
        reqBody.subject,
        reqBody.text
        );
      if (!sendEmail) {
        throw new Error("Something went wrong, please try again or later.");
      }
      res
        .status(200)
        .json({ success: true, message: "Email send successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };


module.exports = {
  createUser,
  getUserList,
  getUserDetails,
  updateDetails,
  deleteUser,
  updateUser,
  sendMail
};
