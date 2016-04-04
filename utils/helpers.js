'use strict';

exports.errorMessage = function (statusCode) {
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

exports.sendIMDBDatas = function (response) {
    return function (data) {
        response.json(data);
    };
};
