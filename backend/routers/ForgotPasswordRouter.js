import express from "express";
import FPass_Email from "../controller/ForgotPassword/FPass_Email.js";



const ForgotPasswordRouter = express.Router();

ForgotPasswordRouter.post("/email",FPass_Email);

export default ForgotPasswordRouter;