const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoutes);


app.get('/', (req, res) => {
  res.send('Hello server');
});


module.exports = app;
