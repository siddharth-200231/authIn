const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "Wrong email/password" });
    }

    // Compare passwords
    const passCheck = await bcrypt.compare(password, user.password);
    if (!passCheck) {
      return res.status(403).json({ message: "Wrong email/password" });
    }

    // Create JWT token
    const jwtoken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Return success response with the token
    return res.status(200).json({
      message: "Login successful",
      jwtoken,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    // Handle any server errors
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  signup,
  login,
};
