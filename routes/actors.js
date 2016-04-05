'use strict';

var express = require('express');
var router  = express.Router();
var routes  = require('./methods/actors');

router.route('/search/actors')
    .get(routes.findActors);

router.route('/actors')
    .get(routes.getActor);

exports.router = router;
