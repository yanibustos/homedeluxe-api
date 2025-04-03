const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

async function getToken(req, res) {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
    const userData = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      avatar: user.avatar,
    };

    return res.status(200).json({ accessToken: token, ...userData });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: error.message });
  }
}

async function requestPasswordReset(req, res) {
  const { email } = req.body;
  console.log("Request received to reset password for email:", email);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const resetToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    const resetLink = `${process.env.API_URL}/reset-password/${resetToken}`;
    await sendResetEmail(user.email, resetLink);

    res.status(201).json({ msg: "Reset link sent to email" });
  } catch (error) {
    console.error("Error during password reset request:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
}

async function resetPassword(req, res) {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { email: decoded.email } });

    if (!user) {
      console.log("User not found or invalid token");
      return res.status(400).json({ message: "Invalid token or user not found" });
    }
    user.password = await bcrypt.hash(password, 10);
    await user.save();

    res.status(201).json({ msg: "Password reset successful" });
  } catch (error) {
    console.error("Error during password reset:", error);
    return res.status(400).json({ msg: "Invalid or expired token" });
  }
}

const sendResetEmail = async (email, resetLink) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "65a7cc4ab4701a",
      pass: "de2f4ac8f4afbe",
    },
  });
  console.log("Hola");
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send password reset email");
  }
};

module.exports = { getToken, requestPasswordReset, resetPassword };
