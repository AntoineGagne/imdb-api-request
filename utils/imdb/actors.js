'use strict';

var http = require('http');

var idOptions = {
    host: 'imdb.com'
};

exports.findActors = function (query, sendIMDBData) {
    idOptions.path = '/xml/find?json=1&nr=1&nm=on&q=' + query;

    return http.get(idOptions, function (response) {
        var data = '';
        response.on('data', function (chunk) {
            data += chunk;
        });

        response.on('end', function () {
            var parsedActors = JSON.parse(data);
            sendIMDBData(parsedActors);
        });
    });
};
