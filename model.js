const db = require('./db');

const getUserByUsername = (username) => new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err){
            reject(err);
        } else {
            resolve(results[0]);
        }
    });
});

const getUserById = (id) => new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err){
            reject(err);
        } else {
            resolve(results[0]);
        }
    });
});

const insertUser = (data) => new Promise((resolve, reject) => {
    db.query('INSERT INTO users (username, password, fullname) VALUES (?, ?, ?)', [data.username, data.password, data.fullname], (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results.insertId);
        }
    });
});

const deleteUser = (id) => new Promise((resolve, reject) => {
    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) {
            reject(err);
        } else {
            resolve();
        }
    });
});

module.exports = {
    getUserByUsername,
    getUserById,
    insertUser,
    deleteUser,
};