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
    if (!request.params || !request.params.id) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        imdbRequests.getMedia(request.params.id, response);
    }
};

exports.getMediaImages = function (request, response) {
    if (!request.body || !request.body.query) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        imdbRequests.getMediaImages(request.body.query, response);
    }
};

exports.getMediaCredits = function (request, response) {
    if (!request.body || !request.body.query) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        imdbRequests.getMediaCredits(request.body.query, response);
    }
};

exports.getUserComments = function (request, response) {
    if (!request.body || !request.body.query) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        imdbRequests.getUserComments(request.body.query, response);
    }
};

exports.getMediaPlot = function (request, response) {
    if (!request.body || !request.body.query) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        imdbRequests.getMediaPlot(request.body.query, response);
    }
};

exports.getTopRatedTVShows = function (_, response) {
    imdbRequests.getTopRatedTVShows(response);
};

exports.getTopRatedMovies = function (_, response) {
    imdbRequests.getTopRatedMovies(response);
};
