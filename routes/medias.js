'use strict';

var express = require('express');
var router  = express.Router();
var routes  = require('./methods/medias');

router.route('/medias')
    .get(routes.findMedias);

exports.router = router;
