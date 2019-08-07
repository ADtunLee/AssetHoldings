    require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var API_router = require('./router/v1/router')
// const start = (options) => {
//   return new Promise((resolve, reject) => {

//   })
// }
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use('/api/v1',API_router)
app.listen(process.env.PORT, () => {
    console.log('Site running on port ' + process.env.PORT);
});