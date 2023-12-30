const sqlite3 = require('sqlite3');

const dbFile = process.env.DB_FILE || './db.sqlite';

const db = new sqlite3.Database('./db.sqlite');

module.exports = db;
