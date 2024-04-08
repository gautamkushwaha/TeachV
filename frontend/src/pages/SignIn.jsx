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
        <h1 className="mx-[30%] underline text-3xl my-7">Sign In</h1>
        <label className="text-xl">
          Email/Username:
          <input
            className="m-3 border border-black p-1 rounded-sm"
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
            className="m-3 border border-black p-1 rounded-sm"
            type="password"
            name="userPass"
            value={formData.userPass}
            onChange={handleChange}
            required
          />
        </label>
        <button
          className="m-1 bg-indigo-500 rounded text-lg font-medium"
          type="submit"
        >
          Submit
        </button>
        <button className="m-1 bg-indigo-500 rounded text-lg font-medium">
          Forgot Password !
        </button>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      </form>
    </>
  );
};

export default SignIn;
