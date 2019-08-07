var res_search_string = require('../models/res_search_string')
exports.search = async (key) =>{
    return await res_search_string.find({'search' : new RegExp(key, 'i')}).limit(8)
}