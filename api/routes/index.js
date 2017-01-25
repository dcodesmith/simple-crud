const express = require('express');
const employeeRoutes = require('./employees');

const router = express.Router(); // eslint-disable-line new-cap

router.use('/employees', employeeRoutes);

module.exports = router;
