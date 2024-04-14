//1. install nodemailer package

//2. import nodemailer
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import OtpDB from "../DB/models/ForgotPass_otp_model.js";

//3. cofigure mail and send it
const sendMail = async(email) => {
   
    const flooredRandomNum = Math.floor((Math.random() * 900000)+ 100000) ; 
    const saltRounds = 10;
    
    
    // //1. create an email transporter.
    //   //SMTP (Simple Mail Transfer Protocol)
      const transporter =  nodemailer.createTransport({
          service: 'gmail',
          auth:{
              user: 'thopgamer69@gmail.com',
              pass: 'uxfxzcxpckmfywop'
          }
      })
  
  
  
  
    //   //2.configure email content.
      const mailOptions = {
          from:'thopgamer69@gmail.com',
          to: email ,
          subject: 'Welcome to NodeJS App',
          text: `Your otp for EdPark Passwrod Rest is  ${flooredRandomNum}`,
      }
  
    //   // storing otp in DB
      
    try {
            if(OtpDB.findOne({usermail:email})){

                await OtpDB.deleteOne({usermail:email})

                await OtpDB.create({
                    usermail: email,
                    otp : flooredRandomNum,  
                })


            }
            else{

               
            }
                  
              } catch (error) {
                  console.log(error);        
              }

   


  
      
  
  
     
  
    //   3. send email
      try {
          await transporter.sendMail(mailOptions);
      } catch (error) {
          console.log('Email send failed with error:', error)
      }
   
}

export default sendMail;