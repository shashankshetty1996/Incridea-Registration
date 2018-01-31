const mysql = require('mysql');

module.exports.addIssue = (message, callback) => {
    let sql = "INSERT INTO issue (message) VALUES (" + mysql.escape(message) +")";
    global.con.query(sql, callback);
}

module.exports.getIssue = (callback) => {
    let sql = "SELECT * FROM issue";
    global.con.query(sql, callback);
}

module.exports.toggleStatus = (id, done, callback) => {
    if(done) {
        done = 0;
    } else {
        done = 1;
    }
    let sql = "UPDATE issue SET done = "+ done + " WHERE id = "+id;
    global.con.query(sql, callback);
}