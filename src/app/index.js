const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const userRouter = require('../router/user.router')


const app = new Koa()
app.use(bodyparser())

app.use(userRouter.routes()).use(userRouter.allowedMethods())


module.exports=app