const dbConnect = require('../db/index')


class UserService{
  //用户注册
  async  create(user){
    const {username,password} = user
    const statement = "INSERT INTO `user` (username,password) VALUES (?,?);"
    const [result] = await dbConnect.execute(statement,[username,password])
    return result
    }
//用户查找
   async findUser(username){
        const statement = "SELECT * FROM `user` WHERE username =?;"
        const [result] = await dbConnect.execute(statement,[username])
        return result
   } 
}

module.exports=new UserService()