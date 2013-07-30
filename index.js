//     __                  
//    / /_  ___  ___  _____
//   / __ \/ _ \/ _ \/ ___/
//  / /_/ /  __/  __/ /    
// /_.___/\___/\___/_/     
//
// enjoy !

var request = require('request'),
    _ = require('underscore');

var res = function(error, response, body ,cb) {
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

// join params to url
exports.join = function(params, url) {
    if (_.isObject(params)) {
        var url = url + '?';
        _.each(params, function(value, key ,list) {
            url = [
                url,
                (url.lastIndexOf('?') == url.length - 1) ? '' : '&',
                key,
                '=',
                value
            ].join('');
        });
    }
    return url;
}

// get
exports.get = function(url, params, cb) {
    request.get({
        url: exports.join(params, url),
        json: true
    }, function(error, response, body){
        res(error, response, body, cb)
    })
}

// post
exports.post = function(url, params, cb) {
    request.post({
        url: url,
        form: params,
        json: true
    }, function(error, response, body){
        res(error, response, body, cb)
    })
}

// put
exports.put = function(url, params, cb) {

}

// delete
exports.delete = function(url, params, cb) {
    
}