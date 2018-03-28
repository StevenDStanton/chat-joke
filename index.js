"user strict"
var request = require('request');

function getJoke(callback){
	var options = {
        uri: 'https://icanhazdadjoke.com/',
        method: 'GET',
        json: {
            "": ""
        }
    };

    request(options, function(error, response, body) {
        callback(body.joke)
    });
}

module.exports = {
	getJoke: getJoke
}