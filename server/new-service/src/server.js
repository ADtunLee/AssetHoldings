var express = require('express')
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./configs/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});




// CORS setting
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

//routes setting
var searchRouter = require('./routes/search.routes')
app.use('/api/search',searchRouter)

// Listen for requests
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
