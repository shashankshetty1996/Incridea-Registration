let crypto = require('crypto');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

// Sample model function for creating .
module.exports.createTable = (callback) => {
    let sql = "CREATE TABLE users (SI_NO INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(512) NOT NULL, flag TINYINT DEFAULT 1)"; 
    global.con.query(sql, callback);
}