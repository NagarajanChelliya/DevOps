const http = require('http');
const port = process.env.PORT || 80;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from simple-app-Nagarajan-from Github-ci-cd\n');
}).listen(port, () => console.log(`Running on ${port}`));
