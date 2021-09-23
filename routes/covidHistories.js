const router = require('express').Router()
const covidHistoryController = require('../controllers/covidHistoryController')

router.get('/', covidHistoryController.getCovidHistory)

module.exports = router