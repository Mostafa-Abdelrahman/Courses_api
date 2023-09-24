const Course=require("../models/courses");
const {validationResult}=require("express-validator")

const getAllCourses= async (req,res)=>{
    const courses= await Course.find();
    res.json(courses);
}

const getSingleCourse= async (req,res)=>{
    try{
        const course=await Course.findById(req.params.courseId);
        if(!course){
            return res.status(404).json({msg:" course not found"});
        }else{
            res.json(course);
        }
    }catch(err){
        return res.status(404).json({msg:" invalid obj id"});
    }
    
    
}

const addCourse=async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }
    const newCourse=new Course(req.body);
    await newCourse.save();
    res.json(newCourse);
}

const updateCourse=async(req,res)=>{
    try{
    const course=await Course.findByIdAndUpdate(req.params.courseId,{$set:{...req.body}});
    res.status(200).json(course);
    }catch(err){
        res.status(400),json({ms:"invalid obj id"})
    }
    
}

const deleteCourse=async(req,res)=>{
    try{
        const result= await Course.deleteOne({_id:req.params.courseId})
        res.status(200).json(result);
    }catch(err){
        res.status(400),json({ms:"invalid obj id"})
    }
    // res.status(200).json(courses);
}

module.exports={
    getAllCourses,
    getSingleCourse,
    addCourse,
    updateCourse,
    deleteCourse
}