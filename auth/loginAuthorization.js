function checkLoginParameter (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const accessToken = req.header('Access-Token');
    console.log(username);
    console.log(password);
    console.log(accessToken);
    if (username === 'admin' && password === 'admin123' && accessToken === "access-token-456") {
        console.log('login validation pass');
        next()
    } else {
        console.log('validation failed');
        return res.status(401).json({
            msg: 'invalid validation info!!!'
        })
    }
}

module.exports = checkLoginParameter;
