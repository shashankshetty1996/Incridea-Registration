const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../model/users');
const auth = require('../model/auth');

let router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from user route');
});

// sample code for creating table
router.get('/createTable', (req, res) => {
    // callback --- here callback is done in route and in model execution is done 
    User.createTable((err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

// auth call from the user
router.post('/', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    User.getUser(username, password, (err, result) => {
        if(err) {       
            res.sendStatus(403);
        }
        if(result != '') { 
            // user found in the database  
            jwt.sign({user:result[0].username}, 'incridea', (err, token) => {
                result[0].token = token;
                result = result[0];
                console.log(result);
                res.json(result);
            });
        } else {
            res.json({username: '', password: '', flag: 0 });
        }
    });
});

router.post('/test', verifyToken, (req, res) => {
    jwt.verify(req.token, 'incridea', (err, autoData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message : 'jwt working', 
                authData : autoData
            });
        }
    });
});

function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];    

    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {      
        res.sendStatus(403);
    }
}

module.exports = router;