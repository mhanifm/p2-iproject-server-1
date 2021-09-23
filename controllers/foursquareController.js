const axios = require('axios')

class ListHotelController {
    static getListHotel(req, res) {
        const ll = req.query.ll || '-6.5680,106.7923'
        const query = req.query.query || 'hotel'
        axios({
            method: 'get',
            url: 'https://api.foursquare.com/v2/venues/explore',
            params: {
                client_id: '1GQFF2HKXF0DIOGEOVF4EOEW5W1DE03PUQ3IE2IQV3RZKGKB',
                client_secret: 'HMUL45TNI1155OLADXOEFVSRK41AZRS4YTZCS3R0GKMFLKAQ',
                query: 'hotel',
                ll: '-6.5680,106.7923',
                limit: 5
            }
        })
        .then(({ data }) => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = ListHotelController