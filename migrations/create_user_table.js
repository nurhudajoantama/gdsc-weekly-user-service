const db = require('../db');

// Create a new table named "User" with the following columns:

// id - Integer, primary key, auto-increments
// username - Varchar(255), required
// password - Varchar(255), required
// fullname - Varchar(255), required

// Write your schema code below this line
db.run(`CREATE TABLE users (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    username Varchar(255) NOT NULL UNIQUE,
    password Varchar(255) NOT NULL, 
    fullname Varchar(255) NOT NULL
    )`, 
(err) => {
    if (err) {
        throw err;
    } else{
        console.log('Table users created');
    }
});