var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');

var router = require('./routes/routes');

var port = process.env.PORT || 5000;
var app  = express();

var corsOptions = {
    origin: '*',
    methods: ['GET']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/', router.router);

app.listen(port);
console.log('Listening on port ' + port);
