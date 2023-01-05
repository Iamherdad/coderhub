const Router =require('@koa/router')
const userController = require('../controller/user.controller')
const userMiddleware =  require('../middleware/user.middleware')
const userRouter = new Router({
    prefix:'/user'
})

userRouter.post('/',userMiddleware.verifyuser,userMiddleware.evcryptPassword, userController.create)

module.exports=userRouter