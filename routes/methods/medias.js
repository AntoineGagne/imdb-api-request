'use strict';

var helpers = require('../../utils/helpers');
var imdbRequests = require('../../utils/imdb/medias');

exports.findMedias = function (request, response) {
    if (!request.body || !request.body.query) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        imdbRequests.findMedias(request.body.query, response);
    }
};

exports.getMedia = function (request, response) {
    if (!request.body || !request.body.query) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        imdbRequests.getMedia(request.body.query, response);
    }
};

exports.getTopRatedTVShows = function (_, response) {
    imdbRequests.getTopRatedTVShows(response);
};

exports.getTopRatedMovies = function (_, response) {
    imdbRequests.getTopRatedMovies(response);
};
