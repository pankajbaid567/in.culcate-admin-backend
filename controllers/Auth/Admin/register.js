// controllers/Auth/Admin/register.js

const admin = require("../../../models/admin");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  try {
    const newAdmin = await admin.create({ ...req.body });
    const token = await newAdmin.createJWT();
    res.status(StatusCodes.CREATED).json({ user: newAdmin.getname(), token });
  } catch (error) {
    // Handle MongoDB duplicate key error
    if (error.code === 11000 && error.keyValue && error.keyValue.email) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          error: `Email ${error.keyValue.email} is already registered.`,
        });
    }
    // Handle validation errors
    if (error.name === "ValidationError") {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
    // Handle other errors
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

module.exports = register;

module.exports = register;
