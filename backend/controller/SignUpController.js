import User from "../DB/models/user_model.js";
import bcrypt from "bcrypt";

export const SignUpController = async (req, res) => {
  // console.log(req.body.formData);
  const { fullname, phone, email, password, college, place, accounttype } =
    req.body.formData;

    const saltRounds = 10;

     bcrypt.hash(password, saltRounds, async function(err, hash) {
      // Store hash in your password DB.

      const hashedPassword = hash;
      console.log(` signUp hash ${hash}`);


      try {

        
        

          
          await User.create({
            username: fullname,
            phone,
            email,
            password:hashedPassword,
            college,
            place,
          });
        
      } catch (error) {
        console.log(error);
      }



    //   bcrypt.compare(password, hasah, function(err, result) {
    //     // result == true
    //     console.log(result);
    // });

  });



 
};
