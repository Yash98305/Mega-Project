const Admin = require("../models/adminModel.js");
const catchAsyncErrors = require("../middlewares/catchAsyncError.js");
const ErrorHandler = require("../utils/errorHandler.js")
const sendToken = require("../jwtToken/jwtTokenAdmin.js")
const sendEmail = require("../utils/nodemailer.js")

exports.adminLoginController = catchAsyncErrors(async (req, res, next) => { 
    const { registrationNumber, password } = req.body;
    const admin = await Admin.findOne({ registrationNumber }).select("+password");
    if (!admin) {
        return next (new ErrorHandler("Registration number not found",404));
    }
    const isPasswordMatched = await admin.comparePassword(password)
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Credentials", 401));
    }
    sendToken(admin, 200, res);
})
exports.getAdminDetails = catchAsyncErrors(async (req, res, next) => {
    const admin = await Admin.findById(req.admin._id);
    res.status(200).json({
      success: true,
      admin,
    });
  });


exports.postOTPController = catchAsyncErrors(async (req, res, next) => {
    const { email, otp, newPassword, conformPassword } = req.body;
    if (newPassword !== conformPassword) {
      return next(new ErrorHandler("Password Mismatch", 400));
    }
    const admin = await Admin.findOne({ email });
    if (admin.otp !== otp) {
      return next(new ErrorHandler("Invalid OTP, check your email again", 400));
    }
    admin.password = newPassword;
    await admin.save();
    sendToken(admin, 200, res);
  });
  exports.forgotPasswordController = catchAsyncErrors(async (req, res, next) => {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      return next(new ErrorHandler("Admin not found", 404));
    }
    function generateOTP() {
      var digits = "0123456789";
      let OTP = "";
      for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }
    const OTP = await generateOTP();
    admin.otp = OTP;
    await admin.save();
    await sendEmail(admin.email, OTP, "OTP");
    res.status(200).json({
      success: true,
      message: "check your registered email for OTP",
    });
    const helper = async () => {
        admin.otp = "";
      await admin.save();
    };
    setTimeout(function () {
      helper();
    }, 300000);
  });

 