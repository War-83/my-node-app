const http = require('http');
http.createServer((req, res) => {
    res.write("Hello from Podman");
    res.end();
}).listen(3000);
