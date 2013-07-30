//     __                  
//    / /_  ___  ___  _____
//   / __ \/ _ \/ _ \/ ___/
//  / /_/ /  __/  __/ /    
// /_.___/\___/\___/_/     
//
// enjoy !

var request = require('request'),
    _ = require('underscore');

var response = function(error, response, body) {
    if (!error) {
        cb(null, {
            stat: response.statusCode,
            response: response,
            body: body
        });
    } else {
        cb(error, {
            stat: response.statusCode,
            response: response
        });
    }
};

// get
exports.get = function(url, params, cb) {
    if (params != null && typeof(params) == 'object') {
        var url = url + '?';
        _.each(params, function(value, key) {
            url = url + '&' + key + '=' + value
        });
    }
    request.get({
        url: url,
        json: true
    }, response)
}

// post
exports.post = function(url, params, cb) {
    request.post({
        url: url,
        form: params,
        json: true
    }, response)
}