var mongoose = require('mongoose')
mongoose.connect('mongodb://192.168.1.251:27017/asset_db', { useNewUrlParser: true });
mongoose.connection.on('error', err => console.log(err));
module.exports = mongoose;