var db = require('../db/connection');
var Schema = db.Schema;

var PostCategorySchema = new Schema({
    _id: {
        type: String,
        required: true
    },

    create_uid: {
        type: String
    },

    create_date: {
        type: Date
    },

    write_uid: {
        type: String
    },
    write_date: {
        type: Date
    },
    company_id: {
        type: String,
        required: true
    },
    status: Boolean,
    delete_id: String,

    name: {
        type: String,
        required: true
    },
    description: String,
    url_name: String,
    url_name: Number,
    sequence: String,
    type:String,
    parent_id:String,
    keyword: String,
    publish: Boolean,
},
    { collection: 'post_category' }
);
module.exports = db.model('post_category', PostCategorySchema);