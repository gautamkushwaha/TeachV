import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";



const  EnterOtp = () => {

  const {useremail} = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");


  const [formData,setFormData] = useState({
    otp : "",
    useremail,
  });



  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/ForgotPassword/otp",{
      formData
    })

    const { userEmail, userOtp } = res.data;

    if (userEmail === "true" && userOtp === "true") {
      // Successful login
      console.log("User logged in successfully");
      navigate("/ForgotPassword/Password");
    } else if (userEmail === "true" && userOtp === "false") {
      // Incorrect password
      setErrorMessage("Incorrect otp");
    } else {
      // User not found
      setErrorMessage("Please enter your email ");
    }



  };

  return (
    <>
    <form onSubmit={handelSubmit}>
      <h3>otp</h3>
      <input
        type="text"
        value={formData.otp}
        name="otp"
        required
        onChange={handelChange}
      />

      <button type="submit">Submit</button>
    </form>

    {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
  </>
  )
}
export default EnterOtp 