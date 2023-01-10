const app = require('../app/index')

app.on('error',(err,ctx)=>{
    let code = 0
    let message = ''
    switch(err){
        case 'EXIST':
        code=-1001,
        message="已存在"
        break;
        case 'NULL':
            code=-1002,
            message="参数为空"
            break;
        case 'INEXISTENCE':
            code=-1003,
            message="用户不存在"
            break ;
        case 'PASSWORD_IS_ERROR':
            code=-1004,
            message="密码错误"
            break;
    }
    ctx.body={code,message}
    return 
})