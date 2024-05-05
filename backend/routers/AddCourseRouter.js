import express from "express";
import AddCourseController from "../controller/AddCourseController.js";

const AddCourseRouter = express.Router();

AddCourseRouter.post("",AddCourseController);

export default AddCourseRouter;