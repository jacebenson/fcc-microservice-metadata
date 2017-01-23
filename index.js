var express = require('express');
var app = express();

var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.use(express.static('views'));

app.get('/', function (request, response) {
    response.sendFile('index.html');
});

app.post('/', upload.single('uploadedFile'), function (request, response) {
    if(request.file) {
        response.send({
            'size': request.file.size
        });

    } else {
        response.send({
            "error": "It was not possible to upload the file, please try again."
        })
    }
});

app.listen(process.env.PORT || 8080);