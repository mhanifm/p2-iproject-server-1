const errorHandler = (err, req, res, next) => {
    let code = 500;
    let message = ['Internal server error', err.message]

    switch (err.name) {
        case 'SequelizeValidationError':
            code = 400
            message = err.errors.map((err) => {
                return err.message
            })
            break;
        case 'Unauthorized':
            code = 401
            message = ['Invalid email or password']
            break;
        case 'JsonWebTokenError':
            code = 401
            message = ['Invalid access token']
        break;
        case 'SequelizeUniqueConstraintError':
            code = 400
            message = ['Email is already exist']
        break;
        default:
        break;
    }

    res.status(code).json({ message })
}

module.exports = errorHandler