import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import StudentDash from "./pages/StudentDash";
import EnterEmail from "./pages/forgotPassword/EnterEmail";
import EnterPassword from "./pages/forgotPassword/EnterPassword";
import EnterOtp from "./pages/forgotPassword/EnterOtp";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import AddCourse from "./Components/Admin/addCourse";
import GetCourses from "./pages/GetCourses";




const App = () => { 
  return ( 


    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/addCourse" element={<AddCourse />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/studentdashboard" element={<StudentDash />} />
        <Route path="/ForgotPassword/Email" element={<EnterEmail/>} />
        <Route path="/ForgotPassword/Password" element={<EnterPassword/>} />
        <Route path="/ForgotPassword/otp" element={<EnterOtp/>} />

        <Route path="/Courses" element={<GetCourses/>} />


      </Routes>
      <Footer/>
    </BrowserRouter>

  );
};
export default App;
