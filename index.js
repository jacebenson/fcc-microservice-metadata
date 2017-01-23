var express = require('express');
var app = express();
var multer  = require('multer');
app.use(express.static('form'));
app.get('/', function (request, response) {
    response.sendFile('index.html');
});