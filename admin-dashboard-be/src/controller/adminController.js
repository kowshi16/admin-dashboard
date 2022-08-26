const adminModel = require("../model/adminList");

module.exports.get = async function (req, res) {
  console.log("GET IS WORKING");
};

module.exports.register = async function (req, res) {
  const { firstName, lastName, phoneNo, email, password, role } = req.body;

  try {
    const userExists = await adminModel.findOne({ email });
    if (userExists) {
      res.status(400);
      res.send({
        success: false,
        message: "User already exists",
      });
      //throw new Error("User already exists");
    }

    const resp = await adminModel.create({
      firstName,
      lastName,
      phoneNo,
      email,
      password,
      role,
    });

    if (resp) {
      res.status(201);
      res.send({
        success: true,
        data: resp,
      });
    } else {
      res.status(400);
      // res.send({
      //   success: false,
      //   message: "Error occurred!",
      // });
      throw new Error("Error occurred!");
    }
  } catch (e) {
    console.log("Error ----------- ", e);
    res.send({
      success: false,
      error: e,
    });
  }
};

module.exports.authUser = async function (req, res) {
  const { email, password } = req.body;

  const user = await adminModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200);
    res.send({
      success: true,
      message: "User logged in successfully",
    });
  } else {
    res.status(400);
    res.send({
      success: true,
      message: "Invalid email or password",
    });
    //throw new Error("Invalid email or password");
  }
};

module.exports.getAllUsers = async function (req, res) {
  const resp = await adminModel.find();
  if (resp) {
    res.send({
      success: true,
      data: resp,
    });
  } else {
    res.send({
      success: false,
      data: [],
    });
  }
};

module.exports.getAdminClient = async function (req, res) {
  const { role } = req.params;

  const resp = await adminModel.find({ role });
  if (resp) {
    res.send({
      success: true,
      data: resp,
    });
  } else {
    res.send({
      success: false,
      data: [],
    });
  }
};
