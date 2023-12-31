const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'user-service',
});

db.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Connected to database');
    }
});

module.exports = db;
