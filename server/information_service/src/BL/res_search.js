var res_search_stringRepository = require('../repositories/res_search_string')
var res_search_string_Model = require('../models/res_search_string')
var PostRepos = require('../repositories/post')
exports.find = async (key) => {
    return await res_search_stringRepository.search(key);
}
exports.SearchResult = async (keyword) => {
    let ListKeyWord = await res_search_stringRepository.search(keyword);
    let ListPostPromise = []
    ListKeyWord.map((keyword, index) => {
        if (keyword.name === 'post') {
            ListPostPromise.push(PostRepos.FindByName(keyword.title))
        }
    })
    return Promise.all(ListPostPromise)

}
exports.CountByKeyword = async (keyword, type) => {

    return await res_search_string_Model
        .aggregate([
            {
                $match: {
                    "search": new RegExp(keyword, 'i'),
                    "name": new RegExp(type, 'i')
                }
            },
            {
                "$group": {
                    "_id": "$rel_id",  // the grouping key
                }
            },

            {
                $count: "total_search"
            }
        ])

}

exports.GetSearchByKeyword = async (keyword, limit, offset, type) => {
    return await res_search_string_Model
        .aggregate([
            {
                $match: {
                    "search": new RegExp(keyword, 'i'),
                    "name": new RegExp(type, 'i')
                }
            },
            { "$skip": offset * limit },
            { "$limit": limit }
        ])
}


exports.GetPostByKeyword = async (keyword, limit, offset, type) => {
    return await res_search_string_Model
        .aggregate([
            {
                $match: {
                    "search": new RegExp(keyword, 'i'),
                    "name": new RegExp(type, 'i')
                }
            },
            {
                "$group": {
                    "_id": "$rel_id",  // the grouping key
                }
            },
            { "$skip": offset * limit },
            { "$limit": limit }
        ])
}