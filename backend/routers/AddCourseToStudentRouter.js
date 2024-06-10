import express from "express"
import AddCourseToStudentController from "../controller/AddCourseToStudentController.js";


const AddCourseToStudentRouter = express.Router();


AddCourseToStudentRouter.post("",AddCourseToStudentController);

export default AddCourseToStudentRouter ; 