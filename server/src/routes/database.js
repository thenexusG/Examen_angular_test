const mysql = require('mysql');

const mysqConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'personas'
});

mysqConnection.connect(function (err){
    if (err) {
        console.log(err);
        return;
    }else{
        console.log('Database is connected');
    }
});

module.exports = mysqConnection;