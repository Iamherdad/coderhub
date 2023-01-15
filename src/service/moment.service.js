const dbConnect = require('../db/index')


class MomentService{

async create(content,id){
    const statement = "INSERT INTO `moment` (content,userid) VALUES(?,?);"
    const [result] = await dbConnect.execute(statement,[content,id])
    return result
}

async queryList(offset,size){
    const statement = "SELECT m.id id,m.content content,m.createtime createtime,m.updatatime updatatime,JSON_OBJECT('username',u.username) user,(SELECT COUNT(*) FROM `comment` WHERE comment.moment_id=m.id) commentCount FROM `moment` m LEFT JOIN `user` u ON m.userid=u.id LIMIT ? OFFSET ?  ;"
    const [result] = await dbConnect.execute(statement,[size,offset])
    return result
}

async query(id){
    const statement = "SELECT moment.content content,moment.id id,moment.createtime createtime,moment.updatatime updateTime,JSON_OBJECT('uid',user.id,'name',user.username) user FROM moment LEFT JOIN user ON moment.userid=user.id WHERE moment. id=?;"
    const [result] = await dbConnect.execute(statement,[id])
    return result
}


 
}

module.exports=new MomentService()