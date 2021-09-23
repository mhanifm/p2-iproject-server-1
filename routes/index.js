const router = require('express').Router()
const userRouter = require('./users')
const covidHistoryRouter = require('./covidHistories')
const foursquareRouter = require('./foursquare')
const countryRouter = require('./countryName')
const errorHandler = require('../middlewares/errorHandler')
const authentication = require('../middlewares/authentication')

router.use('/', userRouter)
router.use('/covid/histories', covidHistoryRouter)
router.use('/list/hotels', foursquareRouter)
router.use('/countries', countryRouter)

router.use(errorHandler)

module.exports = router