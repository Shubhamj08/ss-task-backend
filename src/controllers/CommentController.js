const express = require('express');
const CommentService = require('../services/CommentService.js');

const router = express.Router();

router.get('/', (req, res) => {
  const comments = CommentService.getAllComments();
  res.json(comments);
});

router.get('/:id', (req, res) => {
  const comment = CommentService.getCommentById(req.params.id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

router.post('/', (req, res) => {
  const newComment = CommentService.createComment({
      name: req.body.name, 
      email: req.body.email, 
      body: req.body.body
    });

  res.status(201).json(newComment);
});

router.patch('/:id', (req, res) => {
  const updatedComment = CommentService.updateComment(req.params.id, req.body.body);
  if (updatedComment) {
    res.json(updatedComment);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

router.delete('/:id', (req, res) => {
  const deletedComment = CommentService.deleteComment(req.params.id);
  if (deletedComment) {
    res.json({ id: deletedComment.id });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

module.exports = router;
