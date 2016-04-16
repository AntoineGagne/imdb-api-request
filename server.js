'use strict';

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var fileSystem = require('fs');
var https = require('https');

var medias = require('./routes/medias');
var actors = require('./routes/actors');

var port = process.env.PORT || 5000;
var app  = express();

var options = {
    key : fileSystem.readFileSync('server.key'),
    cert: fileSystem.readFileSync('server.crt')
};

var corsOptions = {
    origin: true,
    allowedHeaders: ['Content-Type', 'Accept', 'X-Requested-With', 'Origin'],
    methods: ['POST', 'GET'],
    preflightContinue: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/', medias.router);
app.use('/', actors.router);

https.createServer(options, app).listen(port);
console.log('Listening on port ' + port);
