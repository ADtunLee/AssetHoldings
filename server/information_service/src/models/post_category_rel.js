var db = require('../db/connection');
var Schema = db.Schema;

var PostCategoryRelationSchema = new Schema({
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
    rel_id:{
        type:String,
        required:true
    },
    category_id: {
        type:String,
        required:true
    }
},
    { collection: 'post_category_rel' }
);
module.exports = db.model('post_category_rel', PostCategoryRelationSchema);