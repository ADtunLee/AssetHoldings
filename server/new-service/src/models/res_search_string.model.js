const mongoose = require('mongoose');
const ResSearchStringSchema = mongoose.Schema({
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
module.exports = mongoose.model('res_search_string',ResSearchStringSchema);