const fs = require('fs')

const registerRouters = (app)=>{
        const allRouters = fs.readdirSync(__dirname)
       for(const file of allRouters){
        if(!file.endsWith('.router.js')) continue
        const router = require(`./${file}`)
        app.use(router.routes()).use(router.allowedMethods())
       }
}

module.exports = registerRouters