var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile('./testDir/test.html', 'utf8', function(err, data){
        res.end(data);
    });
});
server.listen(3000);
