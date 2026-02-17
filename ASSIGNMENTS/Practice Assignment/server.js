const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "notes.json");

const server = http.createServer((req, res) => {

  const url = new URL(req.url, `http://${req.headers.host}`);
  const method = req.method;

  if (method === "GET" && url.pathname === "/notes") {

    fs.readFile(filePath, "utf8", (err, data) => {

      if (err) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading notes");
        return;
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });

  }

  else if (method === "POST" && url.pathname === "/notes") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const newNote = JSON.parse(body);

      fs.readFile(filePath, "utf8", (err, data) => {

        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile(filePath, JSON.stringify(notes), () => {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Note added" }));
        });

      });

    });

  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
