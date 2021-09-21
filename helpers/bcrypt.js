const bcrypt = require('bcryptjs')

function encode (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

function decode (password, hashpassword) {
    return bcrypt.compareSync(password, hashpassword)
}

module.exports = {
    encode,
    decode
}