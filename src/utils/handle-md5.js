const evcrypt =  require('crypto')

const md5 = (key)=>{
    return evcrypt.createHash('md5').update(key)
}
module.exports = {
    md5
}