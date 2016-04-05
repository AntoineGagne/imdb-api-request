'use strict';

var cors = require('cors');
var express = require('express');
var router  = express.Router();

var routes  = require('./methods/actors');

var corsOptions = {
    origin: '*',
    methods: ['GET']
};

router.route('/search/actors')
    .options(cors(corsOptions))
    .get(routes.findActors);

router.route('/actors')
    .options(cors(corsOptions))
    .get(routes.getActor);

exports.router = router;
