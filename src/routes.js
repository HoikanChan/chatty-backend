const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const isAuthenticated = require('./policies/isAuthenticated')
module.exports = app => {
  app.post('/register',
    AuthenticationPolicy.register,
    AuthenticationController.register
  )
  app.post('/login',
    AuthenticationController.login
  )
}
