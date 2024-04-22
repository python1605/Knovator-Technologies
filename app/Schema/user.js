const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const emailValidator = function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email));
};

const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'UserName name is required'],
    },
    profile: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'EmailId required'],
      trim: true,
      validate: [emailValidator, 'Enter proper Email Id'],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('User', UserSchema);
