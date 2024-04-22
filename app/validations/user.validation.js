const Joi = require('joi');

const loginschema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(3).max(15).required(),
});

const registerSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(3).max(15).required(),
});

module.exports = { registerSchema, loginschema };
