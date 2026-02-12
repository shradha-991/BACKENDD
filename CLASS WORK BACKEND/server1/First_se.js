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
