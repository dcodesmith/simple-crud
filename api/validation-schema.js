const Joi = require('joi');

module.exports = {

  createEmployee: {
    body: {
      firstname: Joi.string().alphanum().min(3).max(50)
            .required(),
      surname: Joi.string().alphanum().min(3).max(50)
            .required(),
      contact_number: Joi.string().regex(/^[+]?\d{7,14}$/).required(),
      email: Joi.string().email().required()
    }
  },

  updateEmployee: {
    body: {
      firstname: Joi.string().alphanum().min(3).max(50)
            .optional(),
      surname: Joi.string().alphanum().min(3).max(50)
            .optional(),
      contact_number: Joi.string().regex(/^[+]?\d{7,14}$/).optional(),
      email: Joi.string().email().optional()
    },
    params: {
      email: Joi.string().email()
    }
  }

};
