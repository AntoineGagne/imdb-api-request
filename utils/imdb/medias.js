'use strict';

var request = require('superagent');
var helpers = require('../helpers');

var baseURL = 'http://app.imdb.com';

exports.findMedias = function (query, serverResponse) {
    var url = 'http://www.imdb.com/xml/find';

    return request
        .get(url)
        .query({ json: 1 })
        .query({ nr: 1 })
        .query({ tt: 'on' })
        .query({ q: query })
        .end(function (error, response) {
            if (error || !response.ok) {
                serverResponse
                    .status(404)
                    .json(helpers.errorMessage(404));
            } else {
                serverResponse.json(JSON.parse(response.text));
            }
        });
};

exports.getMedia = function (query, serverResponse) {
    var url = baseURL + '/title/maindetails';

    return request
        .get(url)
        .query({ tconst: query })
        .end(function (error, response) {
            if (error || !response.ok) {
                serverResponse
                    .status(404)
                    .json(helpers.errorMessage(404));
            } else {
                serverResponse.json(JSON.parse(response.text));
            }
        });
};

exports.getTopRatedTVShows = function (serverResponse) {
    var url = baseURL + '/chart/tv';

    return request
        .get(url)
        .end(function (error, response) {
            if (error || !response.ok) {
                serverResponse
                    .status(400)
                    .json(helpers.errorMessage(400));
            } else {
                serverResponse.json(JSON.parse(response.text));
            }
        });
};

exports.getTopRatedMovies = function (serverResponse) {
    var url = baseURL + '/chart/top';

    return request
        .get(url)
        .end(function (error, response) {
            if (error || !response.ok) {
                serverResponse
                    .status(400)
                    .json(helpers.errorMessage(400));
            } else {
                serverResponse.json(JSON.parse(response.text));
            }
        });
};
