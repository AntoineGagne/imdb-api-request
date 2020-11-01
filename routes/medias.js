'use strict';

var express = require('express');
var router  = express.Router();
var routes  = require('./methods/medias');

router.route('/search/medias')
    .get(routes.findMedias);

router.route('/medias/:id')
    .get(routes.getMedia);

router.route('/medias/images')
    .get(routes.getMediaImages);

router.route('/medias/credits')
    .get(routes.getMediaCredits);

router.route('/medias/usercomments')
    .get(routes.getUserComments);

router.route('/medias/plot')
    .get(routes.getMediaPlot);

router.route('/medias/top/tvshows')
    .get(routes.getTopRatedTVShows);

router.route('/medias/top/movies')
    .get(routes.getTopRatedMovies);

exports.router = router;
