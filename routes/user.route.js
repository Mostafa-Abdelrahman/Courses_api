const express=require('express');
const router=express.Router();
const userController=require('../controllers/users.controller');
const verfiyToken=require("../middleware/verfiyToken");
const allowTo=require("../middleware/allowTo");
const multer=require('multer');
const discStorage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        const ext=file.mimetype.split('/')[1];
        const fileName=`user-${Math.random()*40}.${ext}`;
        cb(null,fileName)
    }
})
const upload=multer({storage:discStorage})
//getall userser
// reqister
// login

router.route('/')
    .get(verfiyToken,allowTo("ADMIN"),userController.getAllUsers)

router.route('/register')
    .post(upload.single('avatar'),userController.reqister)

router.route('/login')
    .post(userController.login)

module.exports=router;