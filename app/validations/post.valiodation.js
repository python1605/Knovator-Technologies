const Joi = require('joi');

const create = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  created_by: Joi.string().required(),
  active: Joi.boolean().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required()
});

const update = Joi.object({
  postId:Joi.string().required(),
  title: Joi.string().optional(),
  body: Joi.string().optional(),
  created_by: Joi.string().optional(),
  active: Joi.boolean().optional(),
  latitude: Joi.number().optional(),
  longitude: Joi.number().optional()
});

module.exports = {create,update };
