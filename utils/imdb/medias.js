'use strict';

var http = require('http');

var idOptions = {
    host: 'imdb.com'
};

exports.findMedias = function (query, sendIMDBData) {
    idOptions.path = '/xml/find?json=1&nr=1&tt=on&q=' + query;

    return http.get(idOptions, function (response) {
        var data = '';
        response.on('data', function (chunk) {
            data += chunk;
        });

        response.on('end', function () {
            var parsedMedias = JSON.parse(data);
            sendIMDBData(parsedMedias);
        });
    });
};
