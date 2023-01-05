const userService = require('../service/user.service')
const {md5} = require('../utils/handle-md5')

//用户校验
const verifyuser =async (ctx,next)=>{
    const {username,password} = ctx.request.body
    if(username.length==0||password.length==0){
       return ctx.app.emit('error','NULL',ctx)
   }

   const findUserRes = await userService.findUser(username)
   if(findUserRes.length){
    return ctx.app.emit('error','EXIST',ctx)
   }
   await next()
}
//密码加密
const evcryptPassword = async(ctx,next)=>{
    const {password} =  ctx.request.body
    const md5password = md5(password).digest('hex')
    
    ctx.request.body.password=md5password
   await  next()
}

module.exports={verifyuser,evcryptPassword}