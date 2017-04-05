var http = require('http');
import {submit} from 'submit.js';

http.createServer(function(res, req){
  res.writeHead(200, {'content-type' : 'text/plain'});
  res.write(submit);
  res.end();
}).listen(3000);