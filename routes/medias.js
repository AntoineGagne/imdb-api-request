'use strict';

var express = require('express');
var router  = express.Router();
var routes  = require('./methods/medias');

router.route('/search/medias')
    .post(routes.findMedias);

router.route('/medias')
    .post(routes.getMedia);

exports.router = router;
