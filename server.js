var express = require('express');
var postleitzahlen = require('./postleitzahlen.js').postleitzahlen;
var ortsteile = require('./postleitzahlen.js').ortsteile;
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

// ----------------------------------------------------------------------------

var postleitzahlHandler = function (req, res) {
  var plz = "" + (req.body.q || req.param('q') || "");
  console.info("[postleitzahlHandler] plz=" + plz);
  if (postleitzahlen[plz]) {
    var result = {
      postleitzahl: plz,
      ortsteil: postleitzahlen[plz]
    };
    console.info("[postleitzahlHandler] " + plz + " --> " + postleitzahlen[plz]);
    res.send(200, result);
  } else {
    console.info("[postleitzahlHandler] " + plz + " --> not found");
    res.send(404);
  }
};
app.get('/postleitzahl', postleitzahlHandler);
app.post('/postleitzahl', postleitzahlHandler);

// ----------------------------------------------------------------------------

var ortsteilHandler = function (req, res) {
  var ortsteil = "" + (req.body.q || req.param('q') || "");
  console.info("[ortsteilHandler] ortsteil=" + ortsteil);
  if (ortsteile[ortsteil]) {
    var result = {
      ortsteil: ortsteil,
      postleitzahlen: ortsteile[ortsteil]
    };
    console.info("[ortsteilHandler] " + ortsteil + " --> " + ortsteile[ortsteil]);
    res.send(200, result);
  } else {
    console.info("[ortsteilHandler] " + ortsteil + " --> not found");
    res.send(404);
  }
};
app.get('/ortsteil', ortsteilHandler);
app.post('/ortsteil', ortsteilHandler);

console.log('Started server at port 8080');