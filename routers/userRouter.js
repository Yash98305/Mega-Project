const express = require("express");
const pages = require("../controllers/userController.js");
const { authorizeRoles, isAuthenticatedUser } = require("../middlewares/authMiddlewaresUser.js");
const router = express.Router()
const { userValidationSchema } = require("../Validators/userValidator.js");
const { validator } = require("../middlewares/userValidationMiddleware.js");


router.route("/register").post(validator(userValidationSchema),pages.registerController);
router.route("/login").post(pages.loginController);
// router.route("/forgotPassword").post(forgotPasswordController);
// router.route('/postOTP').post(postOTPController);
// router.route("/me").get(isAuthenticatedUser, getUserDetails);
// router.route("/password/update").put(isAuthenticatedUser, updatePassword);
// router.route("/me/update").put(isAuthenticatedUser, updateProfile);
// router.route('/superadmin/addAdmin').post(authorizeRoles("superadmin"), addAdminByAdminController)

// router
//   .route("/superadmin/users")
//   .get(isAuthenticatedUser, authorizeRoles("superadmin"), getAllUser);
// router
//   .route("/superadmin/user/:id")
//   .get(isAuthenticatedUser, authorizeRoles("superadmin"), getSingleUser)
//   .put(isAuthenticatedUser, authorizeRoles("superadmin"), updateUserRole)
//   .delete(isAuthenticatedUser, authorizeRoles("superadmin"), deleteUser
//   );
// router.route("/logout").get(logout);

module.exports = router;
