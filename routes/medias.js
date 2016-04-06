'use strict';

var express = require('express');
var router  = express.Router();
var routes  = require('./methods/medias');

router.route('/search/medias')
    .post(routes.findMedias);

router.route('/medias')
    .post(routes.getMedia);

router.route('/medias/images')
    .post(routes.getMediaImages);

router.route('/medias/credits')
    .post(routes.getMediaCredits);

router.route('/medias/usercomments')
    .post(routes.getUserComments);

router.route('/medias/plot')
    .post(routes.getMediaPlot);

router.route('/medias/top/tvshows')
    .get(routes.getTopRatedTVShows);

router.route('/medias/top/movies')
    .get(routes.getTopRatedMovies);

exports.router = router;
