// controllers/Auth/Admin/login.js

const admin = require("../../../models/admin");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../../../errors");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const foundAdmin = await admin.findOne({ email });
  if (!foundAdmin) {
    throw new UnauthenticatedError("Invalid email or password");
  }

  const isPasswordCorrect = await foundAdmin.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid email or password");
  }

  const token = foundAdmin.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: foundAdmin.name }, token });
};

module.exports = login;
