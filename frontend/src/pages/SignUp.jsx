import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    place: "",
  
  });



  // const [selectedOption, setSelectedOption] = useState('');

 








  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formData);

    if (formData.password === formData.confirmPassword) {
      axios.post("/api/SignUp", {
        formData,
      });

      // Reset form after submission
      setFormData({
        fullname: "", 
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        college: "",
        place: "", 
    selectedOption:"",

      });

      navigate("/signin");
    } else {
      console.log("password's do not match ");
    }
  };

  return (
    <div className="grid place-content-center">
      <h2 className="text-2xl flex my-7 mx-[15%] underline">Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-xl">
          Full Name:
          <input
            className="m-3 border border-black"
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="text-xl">
          Phone:
          <input
            className="m-3 border border-black"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="text-xl">
          Email:
          <input
            className="m-3 border border-black"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="text-xl">
          Password:
          <input
            className="m-3 border border-black"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="text-xl">
          Confirm Password:
          <input
            className="m-3 border border-black"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="text-xl">
          College:
          <input className="m-3 border border-black"
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="text-xl">
          Place:
          <input
            className="m-3 border border-black"
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        {/* <input type="radio" id="student" value={`student`} />
        <input type="radio" id="mentor" value={`mentor`} /> */}

        <button className="my-8 mx-[20%] text-lg bg-indigo-500 px-3 py-2 rounded" type="submit">Submit</button>

      </form>

        <h4>Are you a Admin ? </h4>

    </div>
  );
};
export default SignUp;
