import User from "../DB/models/user_model.js"

export const ForgotPasswordController = async (req,res) => {

    const {email,otp} = req.body.formData;
   try {

    const user = await User.findOne({email});
    

    
   } catch (error) {
    console.log(error);
   }
    




}
