import  axios  from "axios"
import { useState } from "react"

const ForgotPassword = () => {

    const [errorMessage, setErrorMessage] = useState("");

  
    const [formData,setFormdata] = useState({
        email:"" ,
        otp:"",
    })

    const handelChange = (e)=>{
        const {name,value} = e.target;
        setFormdata({...formData,[name]:value})
    }

    const handelOtp = async (e)=>{
        e.preventDefault();


        if(formData.email){
            console.log("data send");
           const response = axios.post("/api/ForgotPassword",{
            formData
           })

        //    console.log(response);

        }
        else{
            console.log("Enter email");
            setErrorMessage("enter email!");
        }
    }

  
  
    return (
      <>
        <form className="grid place-content-center">
          <h1 className="text-2xl font-semibold underline my-5 grid place-content-center">
            Forgot Password
          </h1>
          <container className="flex my-5">
            <h3>Email:</h3>
            <input
              className="border border-black mx-5 "
              type="email"
              value={formData.email}
              name="email"
              required
              onChange={handelChange}
            />
          </container>
          <button
            className="border font-medium border-black rounded-xl bg-indigo-400 p-1"
            onClick={handelOtp}
          >
            get verification code
          </button>
          <input type="text" />
        </form>

        {errorMessage && (
          <div className="grid place-content-center" style={{ color: "red" }}>
            {errorMessage}
          </div>
        )}
      </>
    );
}
export default ForgotPassword