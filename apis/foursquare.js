const axios = require('axios')

const fourSquareApi = axios.create({
    baseUrl: 'https://api.foursquare.com/v2/venues'
})

module.exports = fourSquareApi