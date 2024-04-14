import User from "../../DB/models/user_model.js";
import bcrypt from "bcrypt";

const FPass_password = async (req, res) => {
  const saltRounds = 10;

  const { NewPassword, useremail } = req.body.formData;

  try {
    const user = User.findOne({ email: useremail });

    if (user) {
      bcrypt.hash(NewPassword, saltRounds, async function (err, hash) {
        
        // Store hash in your password DB.

        const hashedPassword = hash;
        // console.log(` signUp hash ${hash}`);

        try {
          await user.updateOne({ $set: { password: hashedPassword } });
            res.send({
                userEmail: "true",
                userPass : "true"
            })
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      res.send({
        userEmail: "false",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export default FPass_password;
