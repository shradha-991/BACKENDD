const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const pathname = urlObj.pathname;
  const query = urlObj.searchParams;

  if (method === "GET" && pathname === "/search") {
    const term = query.get("q");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Search received", query: term }));
  }

  else if (method === "POST" && pathname === "/data") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      fs.writeFile("./todo.json", body, (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Failed to save data" }));
          return;
        }

        const parsed = JSON.parse(body);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          message: "Data received",
          data: parsed
        }));
      }); 
    });
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
