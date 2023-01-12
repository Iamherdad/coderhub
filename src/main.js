const app  = require('./app')
const {SERVER_PORT} = require('./config/server')
//引入错误处理函数，引入会自动执行
require('./utils/handle-error')

app.listen(SERVER_PORT,()=>{
    console.log(`coderHub启动成功,端口号${SERVER_PORT}~`)
})