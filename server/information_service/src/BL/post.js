var postRepository = require('../repositories/post')
var post_categoryModel = require('../models/post_category')
var post_category_rel_Modal = require('../models/post_category_rel')
var post_Model = require('../models/post')
var fs = require('fs')
const ProcessNestedPostCategory = (listCategory) => {
    var newCategoryList = [];
    var i;
    for (i = 0; i < listCategory.length; i++) {
        if (!listCategory[i].parent_id || listCategory[i].parent_id == "") {

            newCategoryList.push(listCategory[i])
        }
    }
    for (i = 0; i < listCategory.length; i++) {
        newCategoryList.forEach(item => {
            if (item._id === listCategory[i].parent_id) {

                if (item.children) {
                    item.children.push(listCategory[i])
                } else {
                    item.children = [listCategory[i]];
                }
            }
        })
    }

    return newCategoryList;
}


// ----------------------------------
//GET All post 
exports.getAll = async () => {
    return await postRepository.getAll();
}


exports.GetAllCategory = async () => {
    let list_PostCategory = await post_categoryModel.find({}).lean();
    return ProcessNestedPostCategory(list_PostCategory)
}

//GET all POST by array ID POST
exports.GetByListID = async (ListID, limit) => {
    let list_Post = [];
    list_Post = await post_Model
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
                    from: 'res_user',
                    localField: "create_uid",
                    foreignField: "_id",
                    as: 'user'
                },
            },
            { $unwind: '$user' },
        ])
        .limit(limit)
    return list_Post
}

exports.GetDocumentByID = async (ID) => {
    try {
        var contents = fs.readFileSync(`./src/document/post/${ID}`, 'utf8');
        return contents
    }
    catch{
        return undefined;
    }

}

exports.GetByCategorySequence = async (categorySequence, offset, limit) => {
    return await post_category_rel_Modal.aggregate([
        {
            $lookup: {
                from: 'post',
                localField: "rel_id",
                foreignField: "_id",
                as: 'post'
            },
        },

        {
            $lookup: {
                from: 'post_category',
                localField: "category_id",
                foreignField: "_id",
                as: 'post_category'
            }
        },
        {
            $unwind: {
                path: '$post',
            }

        },
        {
            $lookup: {
                from: 'res_user',
                localField: "post.create_uid",
                foreignField: "_id",
                as: 'post.user'
            }
        },
        { $unwind: '$post_category' },
        {
            $match: {
                "post_category.sequence": (parseInt(categorySequence)).toFixed(1).toString()
            }
        },
        { "$skip": offset * limit },
        { "$limit": limit },
        {
            $project: {
                "post": 1,
                "post_category": 1
            }
        }
    ])

}


//GET ONE BY ID
exports.GetByID = async (ID) => {
    return await post_Model.find({ _id: ID }).limit(1).lean();
}