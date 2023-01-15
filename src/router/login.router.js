const Router  = require('@koa/router')
const {login} = require('../controller/login.controller')
const {verifyLogin} = require('../middleware/login.middleware')


const PUBLICK_KEY = require('../config/screct')
const loginRouter = new Router({
    prefix:'/login'
})

loginRouter.post('/',verifyLogin,login)




module.exports = loginRouter

