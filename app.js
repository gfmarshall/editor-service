var express = require('express');

//var express = require('../../');

var app = express();

app.use(express.static(__dirname + "/"));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.get('/parent', function (req, res) {
    res.sendFile('parent.html');
});

app.get('/editor', function (req, res) {
    res.sendFile('editor.html');
});

app.get('/console', function (req, res) {
    res.sendFile('console.html');
});

app.get('/hello', function (req, res) {
    res.send('Hello World from the Editor');
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Editor started on port 3000');
}