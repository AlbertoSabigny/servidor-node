const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error al leer el archivo');
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});