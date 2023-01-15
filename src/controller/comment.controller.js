const commentService = require('../service/comment.service')
class commentController{
   async create(ctx,next){
      const {id:uid} = ctx.user
      const {moment_id,content} = ctx.request.body
        const result = await commentService.create({moment_id,content,uid})
        ctx.body={
            code:1000,
            message:'评论成功',
            data:result
         
        }
       
    }
}

module.exports = new commentController()