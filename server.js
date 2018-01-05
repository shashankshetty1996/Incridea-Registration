const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const ejs = require('ejs');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');

// router modules
let home = require('./routes/index');
let users = require('./routes/users');

// Creating an express app
const app = express();

// Defining node port.
const port = process.env.port || 3000;

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up static folder
app.use('/', express.static(path.join(__dirname, 'public')));

// MySQL connection configuration
// to make connection object access global through out the node application
app.use((req, res, next) => {
    global.con = mysql.createConnection({
        host : "127.0.0.1" || "localhost",
        user : process.env.DB_USER || "root",
        password : process.env.DB_PASSWORD || '',
        database : process.env.DB_NAME || "incridea"
    });
    con.connect();
    next();
});

// Express Session
app.use(session({
    secret : 'secret',
    saveUninitialized : true,
    resave : true
}));

// Passport initializer
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Variable
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Adding routes to the express app
app.use('/api', home);
app.use('/users', users);

// Error handing
app.get('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }
    // res.render("error", {
    //     err : err.message
    // });
    res.send('Error something went wrong');
});

app.listen(port, () => {
     console.log(`Started Node Server on port ${port}`);
});