var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(8080);

app.get('/ajax-get-url', function (req, res) {
  res.send("Ajax Response");
});

app.put('/jquery-put-url', function (req, res) {
  res.send("Yea ... you done it!");
});

app.put('/jquery-json-url', function (req, res) {
  res.send({hall:"welt"});
});
console.log('Started server at port 8080');