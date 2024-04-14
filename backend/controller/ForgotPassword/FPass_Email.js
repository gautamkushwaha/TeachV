import sendMail from "../../helper/mail.js";

const FPass_Email = (req,res)=>{

    const {email} = req.body.formData;
    
    
    sendMail(email);



    res.send("success ");


}

export default FPass_Email;