var db = require('../db/connection');
var Schema = db.Schema;

var ProductSchema = new Schema({
    _id: { type: String, required: true },
    create_uid: { type: String },

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
    code:String,
    name: { type: String, required: true },
    parent_id: String,
    category_id: String,
},
    { collection: 'product' }
);
module.exports = db.model('product', ProductSchema);