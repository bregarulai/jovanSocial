const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    const user = await newUser.save();
    const { password, ...info } = user._doc;
    res.status(201).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
