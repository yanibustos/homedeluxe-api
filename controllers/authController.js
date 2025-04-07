const User = require("../models/User");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getToken(req, res) {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email: req.body.email } }) || Admin.findOne ({ where: { email: req.body.email } });
     if (!user) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
    const userData = {
      id: req.body.id,
      firstname: req.body.firstname ,
      lastname: req.body.lastname,
      email: req.body.email,
      avatar: req.body.password,
    };

    return res.status(200).json({ accessToken: token, ...userData });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = { getToken };
