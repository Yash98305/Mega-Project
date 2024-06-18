const User = require("../models/userModel.js");
const catchAsyncErrors = require("../middlewares/catchAsyncError.js");
const ErrorHandler = require("../utils/errorHandler.js");
const sendToken = require("../jwtToken/jwtToken.js");
const sendEmail = require("../utils/nodemailer.js");

exports.registerController = catchAsyncErrors(async (req, res, next) => {
  const { business,fname,lname,phone, email, password } = req.body;
  const user = await User.create({
    business,fname,lname,phone, email, password
  });
  sendToken(user, 201, res);
});

exports.loginController = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});
