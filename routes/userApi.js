const express = require('express')
const loginAuth = require('../auth/loginAuthorization')
const logoutAuth = require('../auth/logoutAuthorization')
const router = express.Router()

const LoginController = require('../controllers/loginController')
const LogoutController = require('../controllers/logoutController')

const loginController = new LoginController()
const logoutController = new LogoutController()


router.post('/login', loginAuth, loginController.login.bind(loginController))
router.post('/logout', logoutAuth, logoutController.logout.bind(logoutController))

module.exports = router