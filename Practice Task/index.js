const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const created = req.url === "/create";

    const statusCode = created ? 201 : 200;
    const statusMessage = created ? "CREATED" : "OK";

 
    const log = new Date().toISOString() +
                " - " +
                req.method +
                " - " +
                req.url +
                " - " +
                statusCode +
                "\n";

  
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end("Log Error");
        }

        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: statusMessage }));
    });

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
