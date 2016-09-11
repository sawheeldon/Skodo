/* global $ */

var express = require ('express');
var app = express();
var expect  = require("chai").expect;
var request = require("request");
var unirest = require('unirest');
var events = require('events');


// var soccerData = new XMLHttpRequest();

// soccerData.open("GET", "https://api.soccerama.pro/v1.1/competitions?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0&include=country,currentSeason", false);
// soccerData.send(null);

// var data = JSON.parse(soccerData.response);

// var dis = "Superliga: " + data.name;

// document.getElementById("currentLeagues").innerHTML = dis;




// var getApi = function(endpoint, args) {
//     var emitter = new events.EventEmitter();
//     console.log("working");
//     console.log('https://api.soccerama.pro/v1.1/competitions?api_token=__3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0__&include=country,currentSeason' + endpoint);
//     unirest.get('https://api.soccerama.pro/v1.1/competitions?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0&include=country,currentSeason' + endpoint)
//           .qs(args)
//           .end(function(response) {
//                 if (response.ok) {
//                     emitter.emit('end', response.body);
//                 }
//                 else {
//                     emitter.emit('error', response.code);
//                 }
//             });
//     return emitter;
// };

// app.get('', function(req, res) {
//     var searchReq = getFromApi('search', {
//         q: req.params.name,
//         limit: 1,
//         type: 'artist'
//     });
// });

app.use(express.static('public'));
app.listen(process.env.PORT || 8080);