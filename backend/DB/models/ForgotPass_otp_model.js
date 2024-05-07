import mongoose, { Schema } from "mongoose";

const otpSchema = new mongoose.Schema({
    usermail : {
        type:String,
        required: true,
    },
    otp : {
        type:Number,
        required:true,
    },

},
{ timestamps: true }

);

const OtpDB = mongoose.model("forgotpassword",otpSchema);

export default OtpDB;

