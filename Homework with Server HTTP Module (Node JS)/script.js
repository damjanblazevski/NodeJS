const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome!</h1><p>This is the default page.</p>');
  } else if (req.url === '/student') {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <h1>Student Information</h1>
      <p>Student name: Damjan</p>
      <p>Student lastname: Blazhevski</p>
      <p>Academy: SEDC Academy</p>
      <p>Subject: Node JS</p>
    `);
  } else {

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 Not Found</h1><p>The requested URL was not found.</p>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
