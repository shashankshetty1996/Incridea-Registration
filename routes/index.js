const express = require('express');
const jwt = require('jsonwebtoken');
const participants = require('../model/participants');
const college = require('../model/college');
const issue = require('../model/issue');

let router = express.Router();

router.get('/', verifyToken, (req,res) => {
    jwt.verify(req.token, 'incridea', (err, autoData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            participants.getParticipants((err, result) => {
                res.json(result);
            });
        }
    });
});

// Adding participant
router.post('/', verifyToken, (req,res) => {
    jwt.verify(req.token, 'incridea', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            // Storing form data
            let body = req.body;
            participants.addParticipants(body, (err, result) => {
                if(err) {
                    res.sendStatus(403);
                } else {
                    // getting id of the inserted row and adding offset
                    let pid = Number(result.insertId) + 1000;
                    // making 2 digit number
                    let code = ("0" + String(body.college).slice(-2)); 
                    // PID format                       
                    pid = "IN-" + code + "-" + pid;
                    // Add pid to database of the user.
                    participants.generatePID(result.insertId, body, pid, (err, data) => {
                        if(err) {
                            res.sendStatus(403);
                        } else {
                            res.send(pid);
                        }
                    });
                }
            });
        }
    });
});

// list of college name
router.get('/college/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'incridea', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            college.getCollegeName((err, result) => {
                res.send(result);
            });
        }
    });
});


// Total number of participants count
router.get('/participant/total', verifyToken, (req, res) => {
    jwt.verify(req.token, 'incridea', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }
        participants.getTotalCount((err, result) => {
            res.send(result);
        });
    });
});

// Internal registration count
router.get('/participant/internal', verifyToken, (req,res) => {
    jwt.verify(req.token, 'incridea', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }
        participants.getInternalCount((err, result) => {
            res.send(result);
        });
    });
});

// External registration count
router.get('/participant/external', verifyToken, (req,res) => {
    jwt.verify(req.token, 'incridea', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }
        participants.getExternalCount((err, result) => {
            res.send(result);
        });
    });
});

// Add Issue
router.post('/issue/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'incridea', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }
        let message = req.body.message;
        issue.addIssue(message, (err, result) => {
            if(err) {
                res.sendStatus(403);
            }
            issue.getIssue((err, result) => {
                if(err) {
                    res.sendStatus(403);
                }        
                res.send(result);
            });
        });
    });
});

// list all the issue
router.get('/issue/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'incridea', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }
        issue.getIssue((err, result) => {
            if(err) {
                res.sendStatus(403);
            }        
            res.send(result);
        });
    });
});

// Toggle status
router.post('/issue/status/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'incridea', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }
        let id = req.body.id;
        let done = req.body.done;
        issue.toggleStatus(id, done, (err, result) => {
            if(err) {
                res.sendStatus(403);
            }        
            issue.getIssue((err, result) => {
                if(err) {
                    res.sendStatus(403);
                }        
                res.send(result);
            });
        });
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