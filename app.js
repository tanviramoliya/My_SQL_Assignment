const express = require('express');
const bodyParser = require('body-parser');
const DeptRoutes = require('./routes/department');

const app = express();

app.use(bodyParser.json()); 

app.use(DeptRoutes);

app.listen(3000, () => console.log('server Running'));
