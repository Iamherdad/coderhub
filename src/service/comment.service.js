const dbConnect = require('../db/index')

class ComentService{
   async create({moment_id,content,uid}){
            const statement = "INSERT INTO `comment` (moment_id,content,user_id) VALUES(?,?,?)"
           const [res] = await  dbConnect.execute(statement,[moment_id,content,uid])
           return res
    }
}

module.exports = new ComentService()
