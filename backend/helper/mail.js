//1. install nodemailer package

//2. import nodemailer
import nodemailer from "nodemailer";

//3. cofigure mail and send it
async function sendMail(email){
    //1. create an email transporter.
    //SMTP (Simple Mail Transfer Protocol)
   const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'thopgamer69@gmail.com',
            pass: 'uxfxzcxpckmfywop'
        }
    })


    const flooredRandomNum = Math.floor((Math.random() * 900000)+ 100000)

 

    //2.configure email content.
    const mailOptions = {
        from:'thopgamer69@gmail.com',
        to: email ,
        subject: 'Welcome to NodeJS App',
        text: `Your otp for EdPark Passwrod Rest is  ${flooredRandomNum}`,
    }

    //3. send email
    try {
       const result = await transporter.sendMail(mailOptions);
       console.log('Eamil sent successfully')
    } catch (error) {
        console.log('Email send failed with error:', error)
    }
}

export default sendMail;