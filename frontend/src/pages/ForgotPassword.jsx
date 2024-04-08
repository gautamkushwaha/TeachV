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
            console.log("enter email");
            setErrorMessage("enter email!");
        }
    }

  
  
    return ( <>

    <form >

        <h3>Email</h3>
        <input type="email" value={formData.email} name="email" required onChange={handelChange}/>
        <button onClick={handelOtp} >get verification code</button>

        <input type="text" />


    </form>

    {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

        
        
        
        </>


  )
}
export default ForgotPassword