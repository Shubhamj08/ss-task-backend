const Item = require("../models/Comment.js");


class CommentService{

    constructor(){
        this.comments = [];
    }

    getAllComments(){
        return this.comments;
    }

    getCommentById(id) {
        return this.comments.find(comment => comment.id === id);
    }

    createComment({ name, email, body }) {
        const id = Date.now().toString(); // Generate a unique ID
        const newItem = new Item({ id, name, email, body });
        this.comments.push(newItem);
        return newItem;
    }

    updateComment(id, body) {
        const index = this.comments.findIndex(comment => comment.id === id);

        if (index !== -1) {
            this.comments[index].body = body;
            return this.comments[index];
        }

        return null;
    }

    deleteComment(id) {
        const index = this.comments.findIndex(comment => comment.id === id);
        
        if (index !== -1) {
            const deletedComment = this.comments.splice(index, 1);
            return deletedComment[0];
        }

        return null;
    }

}


module.exports = new CommentService();