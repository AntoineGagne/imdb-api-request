'use strict';

var request = require('superagent');
var helpers = require('../helpers');

var baseURL = 'http://app.imdb.com';

exports.findMedias = function (query, serverResponse) {
    var url = 'http://www.imdb.com/xml/find';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .query({ json: 1 })
        .query({ nr: 1 })
        .query({ tt: 'on' })
        .query({ q: query })
        .end(handleResponse);
};

exports.getMedia = function (query, serverResponse) {
    var url = baseURL + '/title/maindetails';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .query({ tconst: query })
        .end(handleResponse);
};

exports.getMediaImages = function (query, serverResponse) {
    var url = baseURL + '/title/photos';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .query({ tconst: query })
        .end(handleResponse);
};

exports.getMediaCredits = function (query, serverResponse) {
    var url = baseURL + '/title/fullcredits';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .query({ tconst: query })
        .end(handleResponse);
};

exports.getUserComments = function (query, serverResponse) {
    var url = baseURL + '/title/usercomments';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .query({ tconst: query })
        .end(handleResponse);
};

exports.getMediaPlot = function (query, serverResponse) {
    var url = baseURL + '/title/plot';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .query({ tconst: query })
        .end(handleResponse);
};

exports.getTopRatedTVShows = function (serverResponse) {
    var url = baseURL + '/chart/tv';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .end(handleResponse);
};

exports.getTopRatedMovies = function (serverResponse) {
    var url = baseURL + '/chart/top';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .end(handleResponse);
};
