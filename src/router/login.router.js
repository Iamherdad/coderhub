const Router  = require('@koa/router')
const {login} = require('../controller/login.controller')
const {verifyLogin} = require('../middleware/login.middleware')
const jwt = require('jsonwebtoken')

const PUBLICK_KEY = require('../config/screct')
const loginRouter = new Router({
    prefix:'/login'
})

loginRouter.post('/',verifyLogin,login)


loginRouter.post('/test',(ctx,next)=>{
    const authorization = ctx.headers.authorization
    if(!authorization){
       return  ctx.app.emit('error','NOT_AUTH',ctx)
    }
    const token = authorization.replace('Bearer ', '')
    try{
        const verifyRes = jwt.verify(token,PUBLICK_KEY,{algorithms:['RS256']})
        ctx.body='登陆成功'
    }catch(err){
       console.log(err,'err')
        return  ctx.app.emit('error','NOT_AUTH',ctx)
    }
    
})

module.exports = loginRouter

