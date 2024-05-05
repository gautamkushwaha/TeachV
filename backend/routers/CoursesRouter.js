import express from "express"
import GetCourses from "../controller/GetCoursesController.js";

const CoursesRouter = express.Router();

CoursesRouter.get("",GetCourses);


export default CoursesRouter;