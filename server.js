'use strict';

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');

var medias = require('./routes/medias');
var actors = require('./routes/actors');

var port = process.env.PORT || 5000;
var app  = express();

var corsOptions = {
    origin: true,
    allowedHeaders: ['Content-Type', 'Accept', 'X-Requested-With', 'Origin'],
    methods: ['POST', 'GET'],
};

app.use(cors());
app.use(bodyParser.json());

app.options('*', cors(corsOptions));
app.use('/', medias.router);
app.use('/', actors.router);

app.listen(port);
console.log('Listening on port ' + port);
