
const express=require("express");
const router=express.Router();

const {body}=require("express-validator")
const cc=require("../controllers/courses.controller.js");

//CRUD (Create / Read / Update /Delete)

router.route('/')
                .get(cc.getAllCourses)
                .post([
                    body('title')
                        .notEmpty()
                        .withMessage("title is requried")
                        .isLength({min:2})
                        .withMessage("title is too short"),
                    body('price')
                        .notEmpty()
                        .withMessage("price is requried")
                ],cc.addCourse);

router.route("/:courseId")
        .get(cc.getSingleCourse)
        .patch(cc.updateCourse)
        .delete(cc.deleteCourse);

module.exports=router;