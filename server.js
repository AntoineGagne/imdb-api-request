'use strict';

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');

var medias = require('./routes/medias');
var actors = require('./routes/actors');

var port = process.env.PORT || 5000;
var app  = express();

var corsOptions = {
    origin: '*',
    methods: ['GET', 'OPTIONS']
};

app.use(cors());
app.use(bodyParser.json());

app.use('/', medias.router);
app.use('/', actors.router);

app.listen(port);
