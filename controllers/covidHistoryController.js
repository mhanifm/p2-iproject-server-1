const covidHistoryApi = require('../apis/covid-19')

class CovidHistoryController {
    static getCovidHistory(req, res) {
        const country = req.query.country || 'indonesia'
        covidHistoryApi.get('/history', {
            params: {
                country
            }
        })
        .then(({ data }) => {
            res.status(200).json({data: {
                country: data.response[0].country,
                newCase: data.response[0].cases.new,
                date: data.response[0].day
            }})
        })
    }
}

module.exports = CovidHistoryController