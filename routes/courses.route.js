
const express=require("express");
const router=express.Router();
const {body}=require("express-validator")
const cc=require("../controllers/courses.controller.js");
const verfiyToken=require("../middleware/verfiyToken");


//CRUD (Create / Read / Update /Delete)

router.route('/')
                .get(verfiyToken,cc.getAllCourses)
                .post([
                    body('title')
                        .notEmpty()
                        .withMessage("title is requried")
                        .isLength({min:2})
                        .withMessage("title is too short"),
                    body('price')
                        .notEmpty()
                        .withMessage("price is requried")
                ],verfiyToken,cc.addCourse);

router.route("/:courseId")
        .get(verfiyToken,cc.getSingleCourse)
        .patch(verfiyToken,cc.updateCourse)
        .delete(verfiyToken,cc.deleteCourse);

module.exports=router;