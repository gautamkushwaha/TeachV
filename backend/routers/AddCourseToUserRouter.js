import express from "express";
import AddCourseToUserController from "../controller/AddCourseToUserController.js";

const AddCourseToUserRouter = express.Router();

AddCourseToUserRouter.post("", AddCourseToUserController);

export default AddCourseToUserRouter;
