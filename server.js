var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use(express.static(__dirname));

app.listen(8080);

app.get('/ajax-get-url', function (req, res) {
  res.send("Ajax Response");
});

app.put('/jquery-put-url', function (req, res) {
  res.send("Yea ... you done it!");
});

app.put('/jquery-json-url', function (req, res) {
  res.send({hallo: "welt"});
});

app.put('/jquery-json-url', function (req, res) {
  res.send({hallo: "welt"});
});

app.put('/exist-user', function (req, res) {
  if (req.body.user === "Andi" || req.body.user === "Martin") {
    res.send(409);
  }
  else {
    res.send(200);
  }
});
console.log('Started server at port 8080');