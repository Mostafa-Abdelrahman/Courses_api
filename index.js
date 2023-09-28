require("dotenv").config()
const express=require("express");
const courseRouter=require("./routes/courses.route")
const mongoose=require('mongoose');
const uri=process.env.mongo_url;
mongoose.connect(uri).then(()=>{
    console.log("mongodb server started")
})
const app=express();
app.use(express.json());
app.use('/api/courses',courseRouter);
app.all("*",(req,res)=>{
    return res.status(404).json({status:"ERROR",messsage:"this resource is not available"});
})

app.listen(5000,()=>{
    console.log("running...");
})