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
import Registration from "./Components/Registration/registration";
import Webdev from "./Components/Courses/webdev";
import Sponsers from "./Components/Collaborations/sponsers";
import Blog from "./Components/Blog/blog";
import Fullblog from "./Components/Blog/fullblog";
import Mycourses from "./Components/Mycourses/mycourses";
import Myprojects from "./Components/Mycourses/myprojects";
import Myblog from "./Components/Mycourses/MYBLOG";
import AddCourse from "./Components/Admin/addCourse";

const App = () => {
  return ( 


    <BrowserRouter>
    <Navbar/>
      <Routes>

        {/* Temporary pages */}
      <Route path="/addCourse" element={<AddCourse />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/studentdashboard" element={<StudentDash />} />
        <Route path="/ForgotPassword/Email" element={<EnterEmail/>} />
        <Route path="/ForgotPassword/Password" element={<EnterPassword/>} />
        <Route path="/ForgotPassword/otp" element={<EnterOtp/>} />

        {/* Need some changes */}
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/courses/webdev" element={<Webdev/>}/>
        <Route path="/collaborations/sponsers" element={<Sponsers/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/fullblog" element={<Fullblog/>}/>

        {/* Wrong dimentions */}
        <Route path="/mycourses" element={<Mycourses/>}/>
        <Route path="/myprojects" element={<Myprojects/>}/>
        <Route path="/myblog" element={<Myblog/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>

  );
};
export default App;
