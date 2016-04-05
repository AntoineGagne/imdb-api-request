'use strict';

var request = require('superagent');
var helpers = require('../helpers');

exports.findActors = function (query, serverResponse) {
    var url = 'http://www.imdb.com/xml/find';

    return request
        .get(url)
        .query({ json: 1 })
        .query({ nr: 1 })
        .query({ nm: 'on' })
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

