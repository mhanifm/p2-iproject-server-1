const axios = require('axios')

const countryNamesApi = axios.create({
    baseURL: 'https://covid-193.p.rapidapi.com',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': '5016d71829mshcb098cacbe76d2ap121972jsn80e8f6d6b237'
    }
})

module.exports = countryNamesApi