var express = require('express')
var router = express.Router();

var mapBL = require('../BL/map')

router.get('/get_list_suggesstion', async (req, res) => {
    var keyword = req.query.keyword || '';
    var limit = parseInt(req.query.limit) || 10;
    var offset = parseInt(req.query.offset) || 0;
    var list_Suggesstion = [];
    list_Suggesstion = await mapBL.SearchAll(keyword, offset, limit)
    return res.json(list_Suggesstion)
})


router.get('/get_by_address_id', async (req, res) => {
    var limit = parseInt(req.query.limit) || 100;
    var address = [];
    address = await mapBL.GetAllByID(req.query.address_id)
    var listPolygonInside = await mapBL.FindAddressInside(address[0]._id,limit,address[0].polygon.type)
    var listProduct = await mapBL.FindProductByPolygon(address[0].polygon.polygons, limit)
    address.ListProduct = listProduct;
    return res.json({ address: address, ListProduct: listProduct,listPolygonInside:listPolygonInside })
})


router.get('/find_product_by_polygon', async (req, res) => {
    try {
        var polygon = JSON.parse(req.query.polygon)
        var limit = parseInt(req.query.limit) || 100;
        var listProduct = await mapBL.FindProductByPolygon(polygon, limit);
        return res.json(listProduct)
    } catch (err) {
        return res.json({ message: err.toString() })
    }

})

router.get('/find_product_by_address_id', async (req, res) => {
    var listProduct = await mapBL.FindProductByAddressID(311)

    return res.json(listProduct)
})

module.exports = router;