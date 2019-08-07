var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/asset_db', { useNewUrlParser: true });
mongoose.connection.on('error', err => console.log(err));
module.exports = mongoose;