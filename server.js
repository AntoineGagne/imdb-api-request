'use strict';

var bodyParser = require('body-parser');
var express = require('express');

var medias = require('./routes/medias');
var actors = require('./routes/actors');

var port = process.env.PORT || 5000;
var app  = express();

app.use(bodyParser.json());

app.use('/', medias.router);
app.use('/', actors.router);

app.listen(port);
