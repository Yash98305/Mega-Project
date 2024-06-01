const express = require('express')
const router = express.Router()
const pages = require('../controllers/adminController.js')
const { authorizeRoles, isAuthenticatedUser } = require("../middlewares/authMiddlewaresAdmin.js");

router.route('/login').post(pages.adminLoginController)
router.route('/me').get(isAuthenticatedUser,authorizeRoles('admin'),pages.getAdminDetails)
router.route("/forgotPassword").post(pages.forgotPasswordController);
router.route('/postOTP').post(pages.postOTPController);

module.exports = router