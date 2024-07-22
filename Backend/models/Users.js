const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
