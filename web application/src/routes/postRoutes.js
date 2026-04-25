const express = require('express');

const router = express.Router();

const sendPosts=require("../controllers/postController.js").sendPosts;

router.get('/', sendPosts);

router.post('/', (req, res) => {
  res.send('Blog created');
});




module.exports = router;