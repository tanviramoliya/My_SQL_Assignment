const express = require('express');
const bodyParser = require('body-parser');
const DeptRoutes = require('./routes/department');
const EmpRoutes = require('./routes/employee');
const SalRoutes = require('./routes/salary');

const app = express();

app.use(bodyParser.json()); 

app.use('/department', DeptRoutes);
app.use('/employee', EmpRoutes);
app.use('/salary', SalRoutes);

app.listen(3000, () => console.log('server Running'));
