const express=require('express');
const router=express.Router();
const userController=require('../controllers/users.controller');

//getall userser
// reqister
// login

router.route('/')
    .get(userController.getAllUsers)

router.route('/register')
    .post(userController.reqister)

router.route('/login')
    .post(userController.login)

module.exports=router;