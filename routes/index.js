const express = require('express');
let router = express.Router();

router.get('/', (req,res) => {
    res.send('Hello from index route');
});

module.exports = router;