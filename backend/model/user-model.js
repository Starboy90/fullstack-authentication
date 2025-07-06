const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lasttName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /.+@.+\..+/, // regex for email format
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

module.exports = mongoose.model("User", userSchema);
