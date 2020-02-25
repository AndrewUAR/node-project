const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
    trim: true,
    maxlength: [20, 'A name must have less or equal to 20 characters!'],
    minlength: [3, 'A name must be at least 3 characters!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address!'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email!']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!']
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
