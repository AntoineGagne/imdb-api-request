'use strict';

var errorMessage = function (statusCode) {
    var error = {};
    switch (statusCode) {
        case 400:
            error.error = 'Bad Request';
            break;
        case 401:
            error.error = 'Unauthorized';
            break;
        case 403:
            error.error = 'Forbidden';
            break;
        case 404:
            error.error = 'Not Found';
            break;
        case 406:
            error.error = 'Not Acceptable';
            break;

        default:
            error.error = 'Unexpected Problem';
            break;
    }

    return error;
};

exports.errorMessage = errorMessage;

exports.handleResponse = function (serverResponse) {
    return function (error, response) {
        if (error || !response.ok) {
            serverResponse
                .status(response.status)
                .json(errorMessage(response.status));
        } else {
            serverResponse.json(JSON.parse(response.text));
        }
    };
};
