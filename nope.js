var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(404);
  response.end("nope");
}).listen(8080);