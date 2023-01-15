
const userService = require('../service/user.service')
class UserController{
   async create(ctx,next){
    const result = await userService.create(ctx.request.body)
    ctx.body={
        code:1000,
        message:'注册成功',
        data:result
    }
    }
}


module.exports=new UserController()