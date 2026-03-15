<<<<<<< HEAD
const user = {
  username: "Shradha",
  password: "12345"
};

const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (method == "GET" && pathname == "/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user)); //body mei data bhejne ko use krte isee .end()
  } 
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
=======
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/api/data") {

        fs.readFile("data.json", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error");
                return;
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });

    } 
     else if (req.method === "POST" && req.url === "/api/data") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const user = JSON.parse(body); 
      console.log(user); 

      fs.readFile("data.json", "utf8", (err, data) => {

        let arr = JSON.parse(data); 
        

        arr.push(user);

        fs.writeFile("data.json", JSON.stringify(arr), () => {
          res.end("Data added successfully");
        });

      });

    });

  }
});

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
>>>>>>> 1a13ac3 (server)
