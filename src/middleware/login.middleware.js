const app = require('../app')
const {findUser} = require('../service/user.service')
const {md5} = require('../utils/handle-md5')
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

module.exports={verifyLogin}