const express = require('express');

const router = express.Router();

const EmpController = require('../controller/employee');

router.get('/', EmpController.getEmployee);

router.post('/add', EmpController.AddEmployee);

router.delete('/:id' , EmpController.DeleteEmployee);

router.put('/:id', EmpController.UpdateEmployee);

module.exports = router;
