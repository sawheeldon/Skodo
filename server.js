var express = require ('express');
var app = express();
var expect  = require("chai").expect;
var request = require("request");

app.use(express.static('public'));
app.listen(process.env.PORT || 8080);