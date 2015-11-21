var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/login', function(req, res) {

    res.json({
        success: true,
        data: {
            acl: {
                '/dashboard': true
            }
        }
    })
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Boilerplate app listening at http://%s:%s', host, port);
});