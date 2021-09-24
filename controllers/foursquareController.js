const fourSquareApi = require('../apis/foursquare')

class ListHotelController {
    static getListHotel(req, res) {
        const ll = req.query.ll || '-6.5680,106.7923'
        const query = req.query.query || 'hotel'
        fourSquareApi({
            method: 'get',
            url: '/explore',
            params: {
                client_id: '1GQFF2HKXF0DIOGEOVF4EOEW5W1DE03PUQ3IE2IQV3RZKGKB',
                client_secret: 'HMUL45TNI1155OLADXOEFVSRK41AZRS4YTZCS3R0GKMFLKAQ',
                query,
                ll,
                limit: 5,
                v: 20180323
            }
        })
        .then(({ data }) => {
            const hotels = []
            const items = data.response.groups[0].items
            items.forEach(el => {
                hotels.push({ 
                    id: el.venue.id,
                    name: el.venue.name,
                    address: el.venue.location.address,
                    lat: el.venue.location.lat,
                    lng: el.venue.location.lng,
                    city: el.venue.location.city
                })
            });
            res.status(200).json(hotels)
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal server error' })
        })
    }
}

module.exports = ListHotelController