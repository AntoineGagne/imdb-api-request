'use strict';

var express = require('express');
var router  = express.Router();
var routes  = require('./methods/medias');

router.route('/search/medias')
    .get(routes.findMedias);

router.route('/medias')
    .get(routes.getMedia);

exports.router = router;
