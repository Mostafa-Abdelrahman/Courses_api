const express=require('express');
const router=express.Router();
const userController=require('../controllers/users.controller');
const verfiyToken=require("../middleware/verfiyToken");
//getall userser
// reqister
// login

router.route('/')
    .get(verfiyToken,userController.getAllUsers)

router.route('/register')
    .post(userController.reqister)

router.route('/login')
    .post(userController.login)

module.exports=router;