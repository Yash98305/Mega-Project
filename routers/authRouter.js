const express = require("express");
const { forgotPasswordController, loginController, logout, registerController, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser, resetPassword, getAllStudentsController, getInactiveStudentsController, getActiveStudentsController, getStatusController, getStatusByGenderController, getStatusByCasteController, addAdminByAdminController, postOTPController, getSchoolStatusController, getDistrict, getBlock, getSchool, personals, reasons, educationals } = require("../controllers/authController.js");
const { authorizeRoles, isAuthenticatedUser } = require("../middlewares/authMiddlewaresUser.js");
const router = express.Router()

router.route("/register").post(registerController);
router.route("/login").post(loginController);
router.route("/forgotPassword").post(forgotPasswordController);
router.route('/postOTP').post(postOTPController);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route('/superadmin/addAdmin').post(authorizeRoles("superadmin"), addAdminByAdminController)

router
  .route("/superadmin/users")
  .get(isAuthenticatedUser, authorizeRoles("superadmin"), getAllUser);
router
  .route("/superadmin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("superadmin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("superadmin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("superadmin"), deleteUser
  );
router.route("/logout").get(logout);

module.exports = router;
