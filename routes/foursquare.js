const router = require('express').Router()
const fourSquareController = require('../controllers/foursquareController')

router.use('/', fourSquareController.getListHotel)

module.exports = router