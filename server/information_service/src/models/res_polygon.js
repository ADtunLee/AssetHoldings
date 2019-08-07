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
   type:String,
   rel_id:String

},
    { collection: 'res_polygon' }
);
module.exports = db.model('res_polygon', PostCategorySchema);