const mysql = require('mysql2');
var con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'student',
        port:3306
    }
);
module.exports=con;
