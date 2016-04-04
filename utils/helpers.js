exports.errorMessage = function (statusCode) {
    'use strict';
    var error = {};
    switch (statusCode) {
        case 400:
            error.error = 'Bad Request';
            break;

        case 404:
            error.error = 'Not Found';
            break;

        default:
            error.error = 'Unexpected Problem';
            break;
    }

    return error;
};
