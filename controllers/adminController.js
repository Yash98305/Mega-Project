const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../models/userModel");

exports.allMemberController =catchAsyncError(async(req,res)=>{
    const members = await User.find({});
    res.status(200).send({
        success: true,
        members: members
    })
})
exports.allUserController =catchAsyncError(async(req,res)=>{
    const users = await User.find({"role":"user"});
    res.status(200).send({
        success: true,
        users: users
    })
})
exports.allAdminController =catchAsyncError(async(req,res)=>{
    const admins = await User.find({"role":"admin"});
    res.status(200).send({
        success: true,
        admins: admins
    })
})
exports.changeRoleController =catchAsyncError(async(req,res)=>{
    const role = req.body.role;
    const newrole = await User.findByIdAndUpdate(req.params.id,{role});
    res.status(200).send({
        success: true,
        message: "Role changed" 
    })
})
exports.singleMemberController =catchAsyncError(async(req,res)=>{
    const member = await User.findById(req.params.id);
    res.status(200).send({
        success: true,
        member: member 
    })
})