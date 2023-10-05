const Course=require('../models/courses');
const User=require('../models/user');
const migrate=async()=>{
   const intial_course=[{
    "title": "html course",
    "price": "10"
},{
    "title": "css course",
    "price": "20"
},{
    "title": "js course",
    "price": "30"
}]
    const courseLength =await Course.count();
    const userLength=await User.count();
    if(courseLength==0&&userLength<=1){
        await Course.insertMany(intial_course);
    }
}

module.exports={
    migrate
}