const Router  = require('@koa/router')
const {create} = require('../controller/comment.controller')
const {verifyToken} = require('../middleware/login.middleware')

const commentRouter = new Router({
    prefix:'/comment'
})

commentRouter.post('/',verifyToken,create)




module.exports = commentRouter

