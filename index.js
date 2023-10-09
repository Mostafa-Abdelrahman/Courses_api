require("dotenv").config();
const cors=require("cors");
const express=require("express");
const courseRouter=require("./routes/courses.route");
const userRouter=require('./routes/user.route.js');
const mongoose=require('mongoose');
const path=require('path');
mongoose.connect("mongodb://127.0.0.1:27017/Coursera").then(()=>{
        console.log("mongodb server started")
    })
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/courses',courseRouter);
app.use('/api/users',userRouter);
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.all("*",(req,res)=>{
    return res.status(404).json({status:"ERROR",messsage:"this resource is not available"});
})
app.listen(5000,()=>{
    console.log("running...");
})
