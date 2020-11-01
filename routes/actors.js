'use strict';

var express = require('express');
var router  = express.Router();
var routes  = require('./methods/actors');

router.route('/search/actors')
    .get(routes.findActors);

router.route('/actors/:id')
    .get(routes.getActor);

router.route('/actors/images')
    .get(routes.getActorImages);

exports.router = router;
