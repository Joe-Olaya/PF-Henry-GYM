const nodemailer = require("nodemailer");
require("dotenv").config();

const forgotPassword = async (req, res) => {
  const { user_email } = req.body;
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
    to: user_email,
    subject: "Forgot your password?",
    text: "Click on the link below for continue with your password reset:",
  };
  try {
    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(message);
    res.status(200).json(info);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const subscription = async (req, res) => {
  const {user_email} = req.body;
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
    to: [user_email],
    subject: "Thanks for subscribing!",
    html: "<div><h3>Hello there!</h3><span>Thanks for subscribing to our website, you will receive the latest news! Follow this <a href='http://localhost:3000/'>link</a> to continue in our website</span></div>" 
  };
  try {
    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(message);
    res.status(200).json(info);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sendMailRegistered = async (user_email) => {
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
    to: [user_email],
    subject: "Successfully registered",
    html: '<div><h1>Welcome to our website!</h1><h3>Click on this <a href="https://pf-henry-gym.vercel.app/">link</a> for see all that we have prepared for you</h3></div>',
  };
  try {
    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(message);
    return info
  } catch (error) {
    console.log(error.message);;
  }
};

module.exports = {
  forgotPassword,
  subscription,
  sendMailRegistered,
};
