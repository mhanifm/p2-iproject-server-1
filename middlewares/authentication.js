const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.access_token
        if (token) {
            const payload = verifyToken(token)
            const foundUser = await User.findOne ({
                where: {email: payload.email}
            })
            if (foundUser) {
                req.user = {
                    id: payload.id,
                    name: payload.name,
                    email: payload.email
                }
                next()
            } else {
                throw ({ name: 'JsonWebTokenError' })
            }
        } else {
            throw ({ name: 'JsonWebTokenError' })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authentication