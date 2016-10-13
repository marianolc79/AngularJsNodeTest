// server.js

// set up ========================
var express = require('express');
var app = express();                               // create our app w/ express

var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console

app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// Services definition
app.get('/api/getService1', function (req, res) {
    var data = [{ id: 1, name: "data1" }, { id: 2, name: "data2" }, { id: 3, name: "data3" }];
    res.json(data);
});
app.get('/api/getService2', function (req, res) {
    var data = [{ id: 4, name: "data4" }, { id: 4, name: "data4" }, { id: 4, name: "data4" }];
    res.json(data);
});

// listen (start app with node server.js) ======================================
app.listen(8081);
console.log("App listening on port 8081");