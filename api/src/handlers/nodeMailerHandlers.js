const nodemailer = require("nodemailer");
require("dotenv").config();

const forgotPassword = async (req,res) => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "suppliesandtraining@gmail.com",
      pass: process.env.NODEMAILER,
    },
  };
  const message = {
    from: "suppliesandtraining@gmail.com",
    to: ["joacobolzon3@gmail.com"],
    subject: "Forgot your password?",
    text: "Click on the link below for continue with your password reset:",
  };
  try {
    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(message);
    console.log(info);
    res.status(200).json(info)
  } catch (error) {
    res.status(400).json({error : error.message})
  }
};

const subscription = async (req,res) => {
    const config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "suppliesandtraining@gmail.com",
        pass: process.env.NODEMAILER,
      },
    };
    const message = {
      from: "suppliesandtraining@gmail.com",
      to: ["joacobolzon3@gmail.com"],
      subject: "Thanks for subscribing!",
      text: "Thanks for subscribing to our website, you will receive the latest news!",
    };
    try {
      const transport = nodemailer.createTransport(config);
      const info = await transport.sendMail(message);
      res.status(200).json(info)
    } catch (error) {
      res.status(400).json({error : error.message})
    }
  };

module.exports = {
    forgotPassword,
    subscription
};
