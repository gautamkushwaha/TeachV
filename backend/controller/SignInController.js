import User from "../DB/models/user_model.js";
import bcrypt from "bcrypt";

export const SignInController = async (req, res) => {
  const { userName, userPass } = req.body.formData;
  
  try {

    

    const user = await User.findOne({ username: userName });

    bcrypt.compare(userPass, user.password, function (err, result) {
      if (result) {
        res.send({
          userName: "true",
          userPass: "true",
          user,
        });
      } else {
        res.send({
          userName: "true",
          userPass: "false",
        });
      }
    });

    if (!user) {
      res.send({ userName: "false" });
      console.log("user not found");
    }
  } catch (error) {
    res.send({ userName: "false" });
  }
};
