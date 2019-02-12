const userApi = require('./userApi')

module.exports = function RouterModule (app) {
  app.use('/jmeter/apidemo', userApi)
}
