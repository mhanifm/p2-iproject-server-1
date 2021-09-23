const router = require('express').Router()
const countryNameController = require('../controllers/countryNameController')

router.use('/', countryNameController.getCountryName)

module.exports = router