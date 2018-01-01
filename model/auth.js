module.exports.verifyToken = (req, res) => {
    const bearerHeader = req.header['Authorization'];

    console.log(`Authorization header is ${bearerHeader}`);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
    } else {
        console.log('this is 403 yar');
        res.sendStatus(403);
    }
}