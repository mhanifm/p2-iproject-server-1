const countryNamesApi = require('../apis/covid-19')

class CountryNameController {
    static getCountryName(req, res) {
        countryNamesApi.get('/countries', {})
        .then(({ data }) => {
            res.status(200).json(data.response)
        })
    }
}

module.exports = CountryNameController