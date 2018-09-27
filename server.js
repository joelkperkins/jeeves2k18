const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

http.createServer((request, response) => {
  const SEARCH = 'filter';
  console.log(request.url);
  if (request.method === 'POST') {
    console.log('Jeeves is here.');
    let body = '';
    request.on('data', chunk => body += chunk);
    request.on('end', () => {
      console.log('Jeeves is looking for: ', body);
    });
    response.end(JSON.parse('Hello'));
  }
}).listen(process.env.PORT || 3000);

console.log(`Jeeves is listening on ${process.env.PORT} or 3000`);
