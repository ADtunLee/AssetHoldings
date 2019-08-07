var res_address_Model = require('../models/res_address')
var res_search_string_Modal =require('../models/res_search_string')
//GET all POST by array ID POST
exports.FindByID = async (ID) => {
    return await res_address_Model.aggregate([
        {
            $match: {
                _id: ID
            }
        },
    ]);
}

exports.FindPolygonByID = async (ID) => {
    return await res_address_Model.aggregate([
        {
            $match: {
                _id: ID
            }
        },
        {
            $lookup: {
                from: 'res_polygon',
                localField: '_id',
                foreignField: 'rel_id',
                as: 'polygon'
            }
        },
        { $unwind: '$polygon' },
    ]);
}

exports.FindAllProductByID = async (ID) => {
    return await res_address_Model.aggregate([
        {
            $match: {
                _id: ID
            }
        },
        {
            $lookup: {
                from: 'res_polygon',
                localField: '_id',
                foreignField: 'rel_id',
                as: 'polygon'
            }
        },
        { $unwind: '$polygon' },
    ])
}

exports.GetByListID = async (ListID, limit) => {
    let list_address = [];
    list_address = await res_address_Model
        .aggregate([
            {
                $match: {
                    "_id": {
                        $in: ListID
                    }
                }
            },
            {
                $lookup: {
                    from: 'res_polygon',
                    localField: '_id',
                    foreignField: 'rel_id',
                    as: 'polygon'
                }
            },
            { $unwind: '$polygon' },
        ])
        .limit(limit)
    return list_address
}