const mysql  =require('mysql2')


//创建mysql连接池
const connectPool  =mysql.createPool({
    host: 'localhost',  
    user: "root", 
    password: "qq1401446942", 
    database: "coderhub", 
    connectionLimit:5
})

//数据库连接池创建测试
connectPool.getConnection((err,connection)=>{
    if(err){
        console.log('mysql创建连接池失败',err)
        return
    }
    //连接数据库测试
    connection.connect((err)=>{
        if(err){
            console.log('mysql连接失败',err)
            return
        }
        console.log('mysql连接成功')
    })
})
const dbConnect = connectPool.promise()

module.exports=dbConnect