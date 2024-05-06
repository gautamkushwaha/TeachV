import express from "express";
import GetCourseController from "../controller/GetCourseController.js";

const CourseRouter = express.Router();

CourseRouter.post("",GetCourseController);

export default CourseRouter;

