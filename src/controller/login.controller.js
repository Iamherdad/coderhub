const jwt = require('jsonwebtoken')
const {PRIVATE_KEY} = require('../config/screct')
class LoginController{
   async login(ctx,next){
        const {username,id} = ctx.user
        const token = jwt.sign({id,username},'lipengfei',{
            expiresIn:60 * 60 * 24,
            // algorithm: 'RS256'
        })
       
        ctx.body={
            code:1000,
            message:'登陆成功',
            token:token
        }
       
    }
}

module.exports = new LoginController()