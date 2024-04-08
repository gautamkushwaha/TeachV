import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userPass: "",
  });

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/SignIn", { formData });

      //deconstructing parms from axios
      const { userName, userPass } = response.data;

      if (userName === "true" && userPass === "true") {
        // Successful login
        console.log("User logged in successfully");
        navigate("/studentdashboard");
      } else if (userName === "true" && userPass === "false") {
        // Incorrect password
        setErrorMessage("Incorrect password");
      } else {
        // User not found
        setErrorMessage("User not found");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      <form className="grid place-content-center" onSubmit={handelSubmit}>
        <h1 className="text-3xl underline mx-[25%] my-7">Sign In</h1>
        <label className="text-xl">
          Email/Username:
          <input
            className="border border-black p-0.5 m-3"
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Enter email/password"
            required
          />
        </label>
        <label className="text-xl">
          Password:
          <input
            className="border border-black p-0.5 m-3"
            type="password"
            name="userPass"
            value={formData.userPass}
            onChange={handleChange}
            required
          />
        </label>

        <button className="font-medium bg-indigo-500 p-1 m-1 w-15 rounded" type="submit">
          Submit
        </button>
        <button className="font-medium bg-indigo-500 p-1 m-1 rounded">
          Forgot Password !
        </button>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      </form>
    </>
  );
};

export default SignIn;
