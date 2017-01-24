const express = require('express');
const employeeController = require('../controller/employees');

const router = express.Router(); // eslint-disable-line new-cap

router
  .get('/', employeeController.getAll)
  .post('/', employeeController.create)
  .put('/:email', employeeController.update)
  .get('/:email', employeeController.getOne)
  .delete('/:email', employeeController.delete);

module.exports = router;
