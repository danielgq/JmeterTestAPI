var jwt = require('jsonwebtoken');

class LoginController {

    login(req, res) {
        try {
            const secretOrPrivateKey = req.header('Secret-Or-PrivateKey');
            const token = jwt.sign(Date.now(), secretOrPrivateKey);
            res.setHeader("login-sucess-token", token);
            res.status(200).json({
                "message": "welcome !"
            });
        } catch (e) {
            res.status(400).json({
                msg: e.message
            });
        }
    }
}

module.exports = LoginController;
