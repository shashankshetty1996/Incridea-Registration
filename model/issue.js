const mysql = require('mysql');

module.exports.addIssue = (message, callback) => {
    let sql = "INSERT INTO issue (message) VALUES (" + mysql.escape(message) +")";
    try {   
        global.con.query(sql, callback);
    } catch ( e ) {

    }
}

module.exports.getIssue = (callback) => {
    let sql = "SELECT * FROM issue";
    try {   
        global.con.query(sql, callback);
    } catch ( e ) {

    }
}

module.exports.toggleStatus = (id, done, callback) => {
    if(done) {
        done = 0;
    } else {
        done = 1;
    }
    let sql = "UPDATE issue SET done = "+ done + " WHERE id = "+id;
    try {   
        global.con.query(sql, callback);
    } catch ( e ) {

    }
}