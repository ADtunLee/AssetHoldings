const mongoose = require('mongoose');
var PostSchema = mongoose.Schema({
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

    name: { type: String, required: true },
    description: String,
    url_name: String,
    sequence: String,
    photo: String,
    receipt_no: Number,
    receipt_date: Date,
    keyword: String,
    publish: Boolean,
    publish_date: Date
},
    { collection: 'post' }
);
module.exports = mongoose.model('post', PostSchema);