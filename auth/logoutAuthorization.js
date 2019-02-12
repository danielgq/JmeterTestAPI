var jwt = require('jsonwebtoken');

function checkLogoutParameter (req, res, next) {
    const loginToken = req.header('Login-Token');
    console.log(loginToken);
    const secretOrPrivateKey = req.header('Secret-Or-PrivateKey');
    jwt.verify(loginToken, secretOrPrivateKey, function(err,decode){
        if(err){
            console.log('validation failed');
            return res.status(401).json({
                msg: 'please login before logout!!!'
            })
        }else{
            console.log('logout validation pass');
            next()
        }
    })
}

module.exports = checkLogoutParameter;
