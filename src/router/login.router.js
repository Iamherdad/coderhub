const Router  = require('@koa/router')
const {login} = require('../controller/login.controller')
const {verifyLogin} = require('../middleware/login.middleware')
const loginRouter = new Router({
    prefix:'/login'
})

loginRouter.post('/',verifyLogin,login)

module.exports = loginRouter

