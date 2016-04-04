'use strict';

var helpers = require('../../utils/helpers');
var imdbRequests = require('../../utils/imdb/medias');

exports.findMedias = function (request, response) {
    if (!request.body && !request.body.query) {
        response.status(400).json(helpers.errorMessage(400));
    } else {
        var imdbDataCallback = helpers.sendIMDBDatas(response);
        var query = request.body.query.replace(/\s+/g, '+');
        imdbRequests.findMedias(query, imdbDataCallback);
    }
};