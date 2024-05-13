import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import CommentController from './controllers/CommentController.js';

const app = express();

app.use(cors({ origin: 'http://localhost:3001' }))
app.use(bodyParser.json());

app.use('/comments', CommentController);

app.get('/', (req, res) => {
  res.send('Welcome to the root path!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
