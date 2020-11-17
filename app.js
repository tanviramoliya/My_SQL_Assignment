const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json()); 

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'tanvi@123',
    database : 'test'
})

mysqlConnection.connect((err) => {
    if(!err)
    {
        console.log('Connection Established..');
    }
    else{
        console.log('Connection Failed...'+ JSON.stringify(err, undefined, 2));
    }
})

 app.listen(3000, () => console.log('server Running'));

