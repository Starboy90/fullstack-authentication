const User = require('../model/user-model');

const Register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create and save new user
    const newUser = new User({ firstName, lastName, email, password });
    const savedUser = await newUser.save();

    return res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }

    return res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const DasBoard = async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { Register, Login, DasBoard };
