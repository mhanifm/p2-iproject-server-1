const router = require('express').Router()
const userRouter = require('./users')
const covidHistoryRouter = require('./covidHistories')
const errorHandler = require('../middlewares/errorHandler')
const authentication = require('../middlewares/authentication')

router.use('/', userRouter)
router.use('/covid/histories', covidHistoryRouter)

router.use(errorHandler)

module.exports = router