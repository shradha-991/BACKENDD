const express = require('express');
const app = express();
// middleware

// create a middleware function which logs all of the incoming requests into a log.txt file -->homework question
app.use((req,res,next)=>{
  console.log("request received "+req.url);
  
});

app.get("/users", (req, res) => {
  res.json({ name: 'Shradha' });
});

app.get("/sum", (req, res) => {
  console.log(req.query);
  res.send(parseInt(req.query.a) + parseInt(req.query.b));
});

app.get("/subtract", (req, res) => {
  console.log(req.query);
  res.send(parseInt(req.query.a) - parseInt(req.query.b));
});
 
app.get("/multiply", (req, res) => {
  console.log(req.query);
  res.send(parseInt(req.query.a) * parseInt(req.query.b));
});

app.get("/divide", (req, res) => {
  console.log(req.query);
  res.send(parseInt(req.query.a) / parseInt(req.query.b));
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});

// const arr=[1,2,3,4,5];
// const jsonarr=JSON.stringify(arr);
// const finalArr=JSON.parse(jsonarr);
// finalArr.push(6);

// console.log(finalArr

// );
