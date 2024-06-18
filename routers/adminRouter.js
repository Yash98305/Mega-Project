const express = require("express");
const pages = require("../controllers/adminController.js");
const { authorizeRoles, isAuthenticatedUser } = require("../middlewares/authMiddlewaresUser.js");
const router = express.Router()


router.route("/all-member").get(isAuthenticatedUser,authorizeRoles("admin"),pages.allMemberController);
router.route("/single-member/:id").get(isAuthenticatedUser,authorizeRoles("admin"),pages.singleMemberController);
router.route("/all-user").get(isAuthenticatedUser,authorizeRoles("admin"),pages.allUserController);
router.route("/all-admin").get(isAuthenticatedUser,authorizeRoles("admin"),pages.allAdminController);
router.route("/change-role/:id").put(isAuthenticatedUser,authorizeRoles("admin"),pages.changeRoleController);

module.exports = router;
