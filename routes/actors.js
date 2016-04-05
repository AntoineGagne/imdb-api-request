'use strict';

var express = require('express');
var router  = express.Router();
var routes  = require('./methods/actors');

router.route('/search/actors')
    .post(routes.findActors);

router.route('/actors')
    .post(routes.getActor);

exports.router = router;
