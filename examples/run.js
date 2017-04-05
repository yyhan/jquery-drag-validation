var express = require('express');
var opn = require("opn");

var app = express();

var port = 9000;

var rootDir = __dirname + "/../";
console.log(rootDir);

app.use("/", express.static(rootDir + "/examples/html"));
app.use("/libs/js", express.static(rootDir + "/src/js"));

app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    var uri = 'http://localhost:' + port;
    console.log('Listening at ' + uri + '\n')
    opn(uri);
});