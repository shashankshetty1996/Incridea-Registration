const mysql = require('mysql');

module.exports.getCollegeName = (callback) => {
    let sql = "SELECT * FROM college";
    try {   
        global.con.query(sql, callback);
    } catch ( e ) {

    }
}

module.exports.getCollegeCode = (college, callback) => {
    let sql = "SELECT College_code FROM college where Name="+mysql.escape(college);
    try {   
        global.con.query(sql, callback);
    } catch ( e ) {

    }    
}