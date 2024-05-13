const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const CommentController = require('./src/controllers/CommentController.js');

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use('/comments', CommentController);

app.get('/', (req, res) => {
  res.send('Welcome to the root path!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
