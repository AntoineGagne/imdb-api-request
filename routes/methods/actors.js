'use strict';

var helpers = require('../../utils/helpers');
var imdbRequests = require('../../utils/imdb/actors');

exports.findActors = function (request, response) {
    if (!request.body || !request.body.query) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        imdbRequests.findActors(request.body.query, response);
    }
};

exports.getActor = function (request, response) {
    if (!request.body || !request.body.query) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        imdbRequests.getActor(request.body.query, response);
    }
};
