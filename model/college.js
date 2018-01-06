const mysql = require('mysql');

module.exports.getCollegeName = (callback) => {
    let sql = "SELECT * FROM college";
    global.con.query(sql, callback);
}

module.exports.getCollegeCode = (college, callback) => {
    let sql = "SELECT College_code FROM college where Name="+mysql.escape(college);
    global.con.query(sql, callback);    
}