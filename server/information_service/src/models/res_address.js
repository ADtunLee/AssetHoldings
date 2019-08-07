var db = require('../db/connection');
var Schema = db.Schema;

var ResAddressSchema = new Schema({
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
    address_name:String,
    type:String,
    parent_id: Number,
    country_id: Number,
    points:Object
},
    { collection: 'res_address' }
);
module.exports = db.model('res_address', ResAddressSchema);