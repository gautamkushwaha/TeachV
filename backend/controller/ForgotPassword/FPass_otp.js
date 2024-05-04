import OtpDB from "../../DB/models/ForgotPass_otp_model.js";
import bcrypt from "bcrypt";


const FPass_otp = async (req,res) => {

    const {otp,useremail} = req.body.formData;



    


    try {

    const user = await OtpDB.findOne({usermail:useremail}) ;

    
      

        if(otp == user.otp){
                res.send({
                  userEmail: "true",
                  userOtp: "true",
                });
              } else {
                res.send({
                  userEmail: "true",
                  userOtp: "false",
                });
        }

    
        if (!user) {
          res.send({
            userEmail: "false",
            userOtp: "false",
          })
        }
      } catch (error) {
        res.send({ userName: "false" });
      }

    


  




}
export default FPass_otp