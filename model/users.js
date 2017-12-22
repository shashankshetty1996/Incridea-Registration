let crypto = require('crypto');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let mysql = require('mysql');

// Sample model function for creating .
module.exports.createTable = (callback) => {
    let sql = "CREATE TABLE users (SI_NO INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(512) NOT NULL, flag TINYINT DEFAULT 0)"; 
    global.con.query(sql, callback);
}

module.exports.getUser = (username, password, callback) => {
    let sql = "select * from users where username = " + mysql.escape(username) + " and password = " + mysql.escape(password);
    console.log('i am in model');
    global.con.query(sql, callback);
}