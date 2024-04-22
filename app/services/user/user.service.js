const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { array } = require('joi');

const userSchema = require('../../Schema/user');

class UserService {
  //isEmailAlreadyExists
  async isEmailAlreadyExists(email) {
    return await userSchema.findOne({ email });
  }

  //isUserNameAlreadyExists
  async isUserNameAlreadyExists(userName) {
    return await userSchema.findOne({ userName });
  }

  // generate jwt token
  async generateAuthToken(user) {
    console.log('user======>', user);
    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET
    );
    return token;
  }

  // Create new user
  async add(data) {
    return await userSchema.create(data);
  }
  // Create new user
  async findUser(id) {
    return await userSchema.findOne({ _id: mongoose.Types.ObjectId(id) });
  }
}

module.exports = new UserService();
