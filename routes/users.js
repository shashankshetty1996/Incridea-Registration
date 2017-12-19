const express = require('express');
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

router.post('/login', (req, res) => {
    // console.log(req.body.username+ '\n' + req.body.password);
    let username = req.body.username;
    let password = req.body.password;
    User.login(username, password, (err, result) => {
        if(err) throw err;
        // if(result.length == 0) {
        //     res.send('Invaild username or password');
        // } else {
        //     res.json(result);
        // }
        res.json(result);        
    });
});

module.exports = router;