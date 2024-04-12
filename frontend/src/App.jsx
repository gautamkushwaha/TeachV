import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import StudentDash from "./pages/StudentDash";
import ForgotPassword from "./pages/ForgotPassword";


const App = () => {
  return ( 



    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/studentdashboard" element={<StudentDash />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
      </Routes>
    </BrowserRouter>

  );
};
export default App;
