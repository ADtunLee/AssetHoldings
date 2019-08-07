var db = require('../db/connection');
var Schema = db.Schema;

var Res_search_stringSchema = new Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    rel_id: String,
    rel_id_name: String,
    title: String,
    search: String,
},
    { collection: 'res_search_string' }
);
module.exports = db.model('res_search_string', Res_search_stringSchema);