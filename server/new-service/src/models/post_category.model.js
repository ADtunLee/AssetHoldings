const mongoose = require('mongoose');
const PostCategorySchema = mongoose.Schema({
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
    { collection: 'post_category' }
);
module.exports = mongoose.model('post_category',PostCategorySchema);