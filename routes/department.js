const express = require('express');

const router = express.Router();

const DeptController = require('../controller/department');

router.get('/department', DeptController.getDepartment);

router.post('/department/add', DeptController.AddDepartment);

router.delete('/department/:id' , DeptController.DeleteDepartment);

router.put('/department/:id', DeptController.UpdateDepartment);

module.exports = router;
