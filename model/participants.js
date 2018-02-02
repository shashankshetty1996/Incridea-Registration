let mysql = require('mysql');

module.exports.addParticipants = (body, callback) => {
    let name = body.name;
    let usn = body.usn;
    let email = body.email;
    let phone = body.phone;
    let college = body.college;

    let sql = "INSERT INTO participants (Name, USN, Email_ID, Phone, College_code) VALUES (" + mysql.escape(name) + ", " + mysql.escape(usn) + ", " + mysql.escape(email) + ", " + mysql.escape(phone) + ", " + mysql.escape(college) + ")";
try {   
 global.con.query(sql, callback);
} catch ( e ) {

}
}

module.exports.generatePID = (body, pid, callback) => {
    let name = body.name;
    let usn = body.usn;
    let email = body.email;
    let phone = body.phone;
    let college = body.college;    

    let sql = "UPDATE participants SET PID = " + mysql.escape(pid) + " WHERE Name = " + mysql.escape(name) + " AND USN = " + mysql.escape(usn) + " AND Email_ID = " + mysql.escape(email) + " AND Phone = " + mysql.escape(phone) + " AND College_code = "+ mysql.escape(college);
    global.con.query(sql, callback);
}

module.exports.getParticipants = (callback) => {
    let sql = "SELECT * FROM participants";
    global.con.query(sql, callback);
}

module.exports.getTotalCount = (callback) => {
    let sql = "SELECT COUNT(*) as count FROM participants";
    global.con.query(sql, callback);
}

module.exports.getInternalCount = (callback) => {
    let sql = "SELECT COUNT(*) as count FROM participants WHERE College_code = 1";
    global.con.query(sql, callback);    
}

module.exports.getExternalCount = (callback) => {
    let sql = "SELECT COUNT(*) as count FROM participants WHERE College_code != 1";
    global.con.query(sql, callback);    
}
