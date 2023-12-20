const db = require('./db');

const getUserByUsername = (username) => new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
        if (err){
            reject(err);
        } else {
            resolve(result);
        }
    });
});

const getUserById = (id) => new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
        if (err){
            reject(err);
        } else {
            resolve(result);
        }
    });
});

const insertUser = (data) => new Promise((resolve, reject) => {
    db.run('INSERT INTO users (username, password, fullname) VALUES (?, ?, ?)', [data.username, data.password, data.fullname], function(err) {
        if (err) {
            reject(err);
        } else {
            resolve(this.lastID);
        }
    });
});

const deleteUser = (id) => new Promise((resolve, reject) => {
    db.run('DELETE FROM users WHERE id = ?', [id], (err) => {
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