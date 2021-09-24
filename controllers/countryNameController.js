const countryNamesApi = require('../apis/covid-19')

class CountryNameController {
    static getCountryName(req, res) {
        countryNamesApi.get('/countries', {})
        .then(({ data }) => {
            res.status(200).json(data.response)
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal server error' })
        })
    }
}

module.exports = CountryNameController