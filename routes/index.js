const router = require('express').Router()
const userRouter = require('./users')
const errorHandler = require('../middlewares/errorHandler')

router.use('/', userRouter)

router.use(errorHandler)

module.exports = router