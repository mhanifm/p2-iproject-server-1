const router = require('express').Router()
const covidHistoryApi = require('../apis/covid-19')
const covidHistoryController = require('../controllers/covidHistoryController')

router.get('/', covidHistoryController.getCovidHistory)

module.exports = router