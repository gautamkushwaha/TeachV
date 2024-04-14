import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";

const EnterPassword = () => {
  const {useremail} = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");


  const [formData,setFormData] = useState({
    NewPassword : "",
    useremail,
  });



  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();



    const res = await axios.post("/api/ForgotPassword/password",{
      formData
    })

    

    const { userEmail, userPass } = res.data;

    if (userEmail === "true" && userPass === "true") {
      // Successful login

      navigate("/signin");
    }  else {
      // User not found
      setErrorMessage("Please enter your email  ");
    }



  };

  return (
    <>
    <form onSubmit={handelSubmit}>
      <h3>Enter new Password</h3>
      <input
        type="text"
        value={formData.NewPassword}
        name="NewPassword"
        required
        onChange={handelChange}
      />

      <button type="submit">Submit</button>
    </form>

    {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
  </>
  )
}
export default EnterPassword