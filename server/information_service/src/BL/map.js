var res_search_string_Model = require('../models/res_search_string');
var res_address_Model = require('../models/res_address')
var res_polygon_Model = require('../models/res_polygon')
var product_Model = require('../models/product')
exports.SearchAll = async (keyword, offset, limit) => {
    return await res_search_string_Model.aggregate([
        {
            $match: {
                search: new RegExp(keyword, 'i'),
                name: {
                    $in: ['product', 'res_address']
                }
            }
        },
        { "$skip": offset * limit },
        { "$limit": limit },

    ])
}

exports.GetAllByID = async (address_id) => {
    return await res_address_Model.aggregate([
        {
            $match: {
                _id: address_id
            }
        },
        {
            $lookup: {
                from: 'res_polygon',
                localField: "_id",
                foreignField: "rel_id",
                as: 'polygon'
            },
        },
        { $unwind: '$polygon' },
        { $limit: 1 }
    ])
}

exports.FindProductByAddressID = async (address_id) => {
    return await product_Model.aggregate([
        {
            $lookup: {
                from: 'res_address',
                localField: "_id",
                foreignField: "_id",
                as: 'polygon'
            },
        },
    ])
}


exports.FindAddressInside = async (address_id, limit, type) => {
    return await res_address_Model.aggregate([
        {
            $match: {
                'parent_id': address_id

            }
        },
        {

            $lookup: {
                from: 'res_polygon',
                localField: "_id",
                foreignField: "rel_id",
                as: 'polygon'
            }
        }, { $unwind: '$polygon' },

        { $limit: limit }
    ])
}


exports.FindProductByPolygon = async (polygon, limit) => {
    return await product_Model.find({
        points: {
            $geoWithin: {
                $geometry: {
                    type: 'Polygon',
                    coordinates: polygon.coordinates
                }
            }
        }
    }).limit(limit)
}