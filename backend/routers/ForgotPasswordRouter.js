import express from "express";
import { ForgotPasswordController } from "../controller/ForgotPasswordController.js";


const ForgotPasswordRouter = express.Router();

ForgotPasswordRouter.post("",ForgotPasswordController);

export default ForgotPasswordRouter;