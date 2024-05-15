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
      });

      navigate("/signin");
    } else {
      console.log("password do not match ");
    }
  };


  return (
    <>
      <div className="bg-teal-100 h-full w-auto p-10">
        <div className="h-[450px] w-auto rounded-xl bg-slate-50 flex flex-row my-[55px] mx-[125px]">
          <img
            alt=""
            src="/registration/registration.png"
            className="h-auto w-full pb-10 rounded-l-lg pl-0 ml-0"
          ></img>
          <div>
            <h1 className=" px-[200px] py-[10px] font-Spinnaker text-xl font-extrabold">
              CREATE NEW ACCOUNT
            </h1>
            <form className="px-[80px]" onSubmit={handleSubmit}>
              <input
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                type="text"
                placeholder="FIRST NAME"
                className="rounded-xl w-[200px] h-[40px] bg-zinc-200 px-5"
              ></input>
              <input
                type="text"
                placeholder="LAST NAME"
                className="rounded-xl w-[200px] h-[40px] bg-zinc-200 px-5 ml-[50px] mb-[10px]"
              ></input>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="EMAIL"
                className="rounded-xl w-[200px] h-[40px] bg-zinc-200 px-5"
              ></input>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                type="tel"
                placeholder="PHONE NUMBER"
                className="rounded-xl w-[200px] h-[40px] bg-zinc-200 px-5 ml-[50px] mb-[10px]"
              ></input>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                type="password"
                placeholder="PASSWORD"
                className="rounded-xl w-[200px] h-[40px] bg-zinc-200 px-5"
              ></input>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                type="password"
                placeholder="REPEAT PASSWORD"
                className="rounded-xl w-[200px] h-[40px] bg-zinc-200 px-5 ml-[50px] mb-[10px]"
              ></input>
              <input
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
                type="text"
                placeholder="COLLEGE"
                className="rounded-xl w-[200px] h-[40px] bg-zinc-200 px-5"
              ></input>
              <input
                name="place"
                value={formData.place}
                onChange={handleChange}
                required
                type="text"
                placeholder="BRANCH"
                className="rounded-xl w-[200px] h-[40px] bg-zinc-200 px-5 ml-[50px] mb-[10px]"
              ></input>
              <button
                type="submit"
                className=" h-[40px] w-[200px] bg-black rounded-full mt-[15px] ml-[30%] text-white font-TharLon text-sm">
                CREATE ACCOUNT</button>
            </form>
            <p className="ml-[37%] text-Stoke mt-[10px]">
              Already a member?{" "}
              <a href="/signin" className="text-sky-500 no-underline">
                {" "}
                Log In
              </a>
            </p>
            <p className="ml-[45%] -mt-2">OR</p>
            <div className="flex flex-row justify-around w-[157px] ml-[36%] -mt-2">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  class="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //   <div className="grid place-content-center">
  //     <h2 className="text-2xl flex my-7 mx-[15%] underline">Signup Form</h2>
  //     <form onSubmit={handleSubmit}>
  //       <label className="text-xl">
  //         Full Name:
  //         <input
  //           className="m-3 border border-black"
  //           type="text"
  //           name="fullname"
  //           value={formData.fullname}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <label className="text-xl">
  //         Phone:
  //         <input
  //           className="m-3 border border-black"
  //           type="tel"
  //           name="phone"
  //           value={formData.phone}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <label className="text-xl">
  //         Email:
  //         <input
  //           className="m-3 border border-black"
  //           type="email"
  //           name="email"
  //           value={formData.email}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <label className="text-xl">
  //         Password:
  //         <input
  //           className="m-3 border border-black"
  //           type="password"
  //           name="password"
  //           value={formData.password}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <label className="text-xl">
  //         Confirm Password:
  //         <input
  //           className="m-3 border border-black"
  //           type="password"
  //           name="confirmPassword"
  //           value={formData.confirmPassword}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <label className="text-xl">
  //         College:
  //         <input className="m-3 border border-black"
  //           type="text"
  //           name="college"
  //           value={formData.college}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <label className="text-xl">
  //         Place:
  //         <input
  //           className="m-3 border border-black"
  //           type="text"
  //           name="place"
  //           value={formData.place}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <button className="my-8 mx-[20%] text-lg bg-indigo-500 px-3 py-2 rounded" type="submit">Submit</button>
  //     </form>
  //   </div>
  // );
};
export default SignUp;
