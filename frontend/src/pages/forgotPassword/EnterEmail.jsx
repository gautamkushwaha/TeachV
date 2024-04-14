import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsermail } from "../../features/user/UserSlice";
import {useNavigate} from "react-router"

const EnterEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormdata] = useState({
    email: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    dispatch(setUsermail(formData.email));
    const res = await axios.post("/api/ForgotPassword/email",{
      formData
    });
    console.log(res);
    navigate("/ForgotPassword/otp");


  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <h3>Email</h3>
        <input
          type="email"
          value={formData.email}
          name="email"
          required
          onChange={handelChange}
        />

        <button type="submit">Submit</button>
      </form>

      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </>
  );
};
export default EnterEmail;
