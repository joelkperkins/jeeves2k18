const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

http.createServer((request, response) => {
  const SEARCH = 'filter';
  console.log(request.url);
  if (request.method === 'POST' && request.url === `/?url=https://www.googleapis.com/%0A%20%20customsearch/v1?key=AIzaSyBxosEOVRALmuCV-TzhLjfroQuhd8ex9Sk%26cx=cx=006754435674325922743:eel7glah3ve%26q=${SEARCH}`) {
    fs.readFile('./server/index.html', (err, data) => {
      if (err) return console.error(err);
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data);
      response.end(console.log(data));
    });
  }
}).listen(3000);

console.log('Jeeves is listening on 3000');
