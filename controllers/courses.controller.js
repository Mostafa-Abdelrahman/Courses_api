const e = require("express");
const Course=require("../models/courses");
const {validationResult}=require("express-validator")

const getAllCourses= async (req,res)=>{
    try{
        const limit=req.query.limit|| 10;
        const page=req.query.page||1;
        const skip=(page-1)*limit;
        const courses= await Course.find({},{"__v":false}).limit(limit).skip(skip);
        if(!courses){
            return res.status(404).json({status:"FAIL",data:{courses:null,code:"404"}});
        }
        else{
            res.json({"status":"sucess","data":{courses}});
        }
    }catch(err){
        return res.status(404).json({status:"ERROR",data:null,msg:err,code:"400"});
    }
}

const getSingleCourse= async (req,res)=>{
    try{
        const course=await Course.findById(req.params.courseId,{"__v":false});
        if(!course){
            return res.status(404).json({status:"FAIL",data:{course:null},code:"404"});
        }else{
            res.json({"status":"SUCCESS","data":{course}});
        }
    }catch(err){
        return res.status(404).json({status:"ERROR",data:null,msg:err,code:"400"});
    }
    
    
}

const addCourse=async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({status:"FAIL",data:errors.array()});
    }
    const newCourse=new Course(req.body);
    await newCourse.save();
    res.json({status:"SUCCESS",data:newCourse});
}

const updateCourse=async(req,res)=>{
    try{
    const course=await Course.updateOne({_id:req.params.courseId},{$set:{...req.body}});
    res.json({"status":"SUCCESS","data":{course}});
}catch(err){
    return res.status(404).json({status:"ERROR",data:null,msg:err,code:"400"});
}
    
}

const deleteCourse=async(req,res)=>{
    try{
        const result= await Course.deleteOne({_id:req.params.courseId})
        console.log(result);
        if(result.deletedCount==1){
            res.status(200).json({status:"SUCCESS",data:null});
        }
        else{
            res.status(200).json({status:"FAIL",data:"already deleted"});
        }
    }catch(err){
        return res.status(404).json({status:"ERROR",data:null,msg:err,code:"400"});
    }
}

module.exports={
    getAllCourses,
    getSingleCourse,
    addCourse,
    updateCourse,
    deleteCourse
}