const momentService = require('../service/moment.service')

class MomentController{
   async create(ctx,next){
        const {content} = ctx.request.body
        const {user} = ctx
        const res = await momentService.create(content,user.id)

        ctx.body=res
    }
    async queryList(ctx,next){

        const {offset,size} = ctx.request.query
        
        const res = await momentService.queryList(offset,size)
       
        ctx.body = res
    }
    async query(ctx,next){

        const {id} = ctx.request.params
        const res = await momentService.query(id)
    
        ctx.body = res
    }
}

module.exports = new MomentController()
