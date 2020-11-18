const express = require('express');

const router = express.Router();

const SalController = require('../controller/salary');

router.get('/', SalController.getSalary);

router.post('/add/:emp_id', SalController.AddSalary);

router.delete('/:id' , SalController.DeleteSalary);

router.put('/:id', SalController.UpdateSalary);

module.exports = router;
