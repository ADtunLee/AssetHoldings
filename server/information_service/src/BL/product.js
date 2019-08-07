var product_Model = require('../models/product')
exports.FindByID = async (ID)=>{
    return await product_Model.aggregate([
        {
            $match: {
                _id: ID
            },
        }
    ])
}

exports.GetByListID = async (ListID, limit) => {
    let list_product = [];
    list_product = await product_Model
        .aggregate([
            {
                $match: {
                    "_id": {
                        $in: ListID
                    }
                }
            },
        ])
        .limit(limit)
    return list_product
}