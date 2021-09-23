const axios = require('axios')

const fourSquareApi = axios.create({
    baseURL: 'https://api.foursquare.com/v2/venues'
})

module.exports = fourSquareApi