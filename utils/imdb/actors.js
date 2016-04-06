'use strict';

var request = require('superagent');
var helpers = require('../helpers');

var baseURL = 'http://app.imdb.com';

exports.findActors = function (query, serverResponse) {
    var url = 'http://www.imdb.com/xml/find';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .query({ json: 1 })
        .query({ nr: 1 })
        .query({ nm: 'on' })
        .query({ q: query })
        .end(handleResponse);
};

exports.getActor = function (query, serverResponse) {
    var url = baseURL + '/name/maindetails';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .query({ nconst: query })
        .end(handleResponse);
};

exports.getActorImages = function (query, serverResponse) {
    var url = baseURL + '/name/photos';
    var handleResponse = helpers.handleResponse(serverResponse);

    return request
        .get(url)
        .query({ nconst: query })
        .end(handleResponse);
};
