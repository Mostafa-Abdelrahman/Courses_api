let {courses}=require("../data/courses")
const {validationResult}=require("express-validator")

const getAllCourses=(req,res)=>{
    res.json(courses);
}

const getSingleCourse=(req,res)=>{
    const courseId=+req.params.courseId;
    const course=courses.find((course)=>course.id===courseId);
    if(!course){
        return res.status(404).json({msg:" course not found"});
    }else{
        res.json(course);
    }
}

const addCourse=(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }
    const course={id:courses.length+1, ...req.body};
    courses.push(course);
    res.json(course);
}

const updateCourse=(req,res)=>{
    const courseId=+req.params.courseId;
    let course =courses.find((course)=>course.id===courseId);
    console.log(course);
    course= {...course,...req.body};
    console.log(course);
    res.status(200).json(course);
}

const deleteCourse=(req,res)=>{
    const courseId=+req.params.courseId;
    courses=courses.filter((course)=>course.id!==courseId);
    res.status(200).json({deleting:"done"});
    // res.status(200).json(courses);
}

module.exports={
    getAllCourses,
    getSingleCourse,
    addCourse,
    updateCourse,
    deleteCourse
}