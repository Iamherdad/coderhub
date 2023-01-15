const Router  = require('@koa/router')
const momentController = require('../controller/moment.controller')
const MomentCtroller = require('../controller/moment.controller')
const {verifyToken} = require('../middleware/login.middleware')



const momentRouter = new Router({
    prefix:'/moment'
})

momentRouter.post('/',verifyToken,MomentCtroller.create)

momentRouter.get('/query',momentController.queryList)

momentRouter.get('/:id',momentController.query)





module.exports = momentRouter

