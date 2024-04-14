import User from "../../DB/models/user_model.js";
import sendMail from "../../helper/mail.js";

const FPass_Email = async (req,res)=>{

    const {email} = req.body.formData;

    try {

        console.log("hello");
        const user = await User.findOne({ email });

        if(user){

            try {
                sendMail(email);
                res.send("success")
            } catch (error) {
                console.log(error);
                res.send("email failure")
            }

        }
        else{
            res.send("User not Found")
        }
    } catch (error) {
        console.log(error);
    }

}

export default FPass_Email;