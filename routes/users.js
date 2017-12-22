const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../model/users');

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
        } else if(result != '') { 
            // user found in the database  
            let user = result[0];
            jwt.sign({user:user.username}, 'secretkey', { expiresIn : '9h'}, (err, token) => {
                result[0].token = token;
                result = result[0];
                console.log(result);
                res.json(result);
            });
            // res.json(result[0]);
        } else {
            res.json({username: '', password: '', flag: 0 });
        }
    });
});

router.post('/test', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, autoData) => {
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

    console.log(req.header['authorization']);
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        // res.send(req.header);
        res.sendStatus(403);
    }
}

module.exports = router;