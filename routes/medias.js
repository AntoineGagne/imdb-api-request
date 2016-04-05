'use strict';

var cors = require('cors');
var express = require('express');
var router  = express.Router();

var routes  = require('./methods/medias');

var corsOptions = {
    origin: '*',
    methods: ['GET']
};

router.route('/search/medias')
    .options(cors(corsOptions))
    .get(routes.findMedias);

router.route('/medias')
    .options(cors(corsOptions))
    .get(routes.getMedia);

exports.router = router;
