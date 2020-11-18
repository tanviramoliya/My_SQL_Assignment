const express = require('express');

const router = express.Router();

const DeptController = require('../controller/department');

router.get('/', DeptController.getDepartment);

router.post('/add', DeptController.AddDepartment);

router.delete('/:id' , DeptController.DeleteDepartment);

router.put('/:id', DeptController.UpdateDepartment);

module.exports = router;
