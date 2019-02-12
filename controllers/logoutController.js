
class LogoutController {

    logout(req, res) {
        try {
            res.status(200).json({
                "message": "goodbye !"
            });
        } catch (e) {
            res.status(400).json({
                msg: e.message
            });
        }
    }
}

module.exports = LogoutController;
