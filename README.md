beer ![npm](https://badge.fury.io/js/beer.png)
======

have a drink and waiting for result callback

### How to install 

````
$ npm install beer
````

### Sample code

````javascript
var beer = require('beer');

beer.get("http://google/com",{
    param: 1,
    param2: 2
},function(err,result){
    if (!err) {
        // enjoy !
        console.log(result)
    } else {
        console.log('Opps !!');
    }
});
````

### APIs

#### beer.get(url,params,callback)

- `url` [String]
- `params` [Object]
    - `key` : ``value` : will joined `URL`
- `callback` [Funtion]
    - error : null or error object
    - result : fetch result

#### beer.post(url,params,callback)

- `url` [String]
- `params` [Object] sent as `form`
    - `key` : ``value`
- `callback` [Funtion]
    - error : null or error object
    - result : fetch result