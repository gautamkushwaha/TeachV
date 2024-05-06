import express from "express";
import ConnectDB from "./DB/ConnectDB.js";
import SignUpRouter from "./routers/SignupRoute.js";
import SignInRouter from "./routers/SigninRoute.js";
import ForgotPasswordRouter from "./routers/ForgotPasswordRouter.js";
import AddCourseRouter from "./routers/AddCourseRouter.js";
import CoursesRouter from "./routers/CoursesRouter.js";
import CourseRouter from "./routers/CourseRouter.js";

const app = express();
const port = 3000; 

// middleware

app.use(express.json());



//routes

app.use("/api/SignUp", SignUpRouter);
app.use("/api/SignIn", SignInRouter);
app.use("/api/ForgotPassword",ForgotPasswordRouter);
app.use("/api/addcourse",AddCourseRouter);
app.use("/api/courses",CoursesRouter);
app.use("/api/GetCourseById",CourseRouter);



//database connection
ConnectDB();

app.listen(port, () => {
  console.log(`server is active on port ${port}`);
});
