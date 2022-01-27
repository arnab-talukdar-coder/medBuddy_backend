const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().required().label("Name"),
  email: Joi.string().email().required().label("Email"),
  password: Joi.string().required().label("Password"),
});
