import express from "express";
import FPass_Email from "../controller/ForgotPassword/FPass_Email.js";
import FPass_otp from "../controller/ForgotPassword/FPass_otp.js";
import FPass_password from "../controller/ForgotPassword/FPass_password.js";



const ForgotPasswordRouter = express.Router();

ForgotPasswordRouter.post("/email",FPass_Email);
ForgotPasswordRouter.post("/otp",FPass_otp);
ForgotPasswordRouter.post("/password",FPass_password);


export default ForgotPasswordRouter;