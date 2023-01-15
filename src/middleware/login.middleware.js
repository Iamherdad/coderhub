const app = require('../app')
const {findUser} = require('../service/user.service')
const {md5} = require('../utils/handle-md5')
const jwt = require('jsonwebtoken')

const verifyLogin =async (ctx,next)=>{
    const {username,password} = ctx.request.body
    if(!username||!password){
        return ctx.app.emit('error','NULL',ctx)
    }
    const userFinRes = await findUser(username)
    if(userFinRes.length==0){
        return ctx.app.emit('error','INEXISTENCE',ctx)
    }
    if(md5(password).digest('hex')!== userFinRes[0].password){
        return ctx.app.emit('error','PASSWORD_IS_ERROR',ctx)
    }
    ctx.user = userFinRes[0]
    next()
}

const verifyToken =async (ctx,next)=>{
    const authorization = ctx.headers.authorization
    if(!authorization){
       return  ctx.app.emit('error','NOT_AUTH',ctx)
    }
    const token = authorization.replace('Bearer ', '')
  
    try{
        // const verifyRes = jwt.verify(token,PUBLICK_KEY,{algorithms:'RS256'})
        const verifyRes = jwt.verify(token,'lipengfei')
        ctx.user=verifyRes
       await next()
    }catch(err){
        console.log(err)
        return  ctx.app.emit('error','NOT_AUTH',ctx)
    }
}

module.exports={verifyLogin,verifyToken}