const express = require('express');
const validate = require('express-validation');
const schema = require('../validation-schema');
const employeeController = require('../controller/employees');

const router = express.Router(); // eslint-disable-line new-cap

router
  .get('/', employeeController.getAll)
  .get('/:email', employeeController.getOne)
  .post('/', validate(schema.createEmployee), employeeController.create)
  .put('/:email', validate(schema.updateEmployee), employeeController.update)
  .delete('/:email', employeeController.delete);

module.exports = router;
