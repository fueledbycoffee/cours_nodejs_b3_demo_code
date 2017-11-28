var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Post = mongoose.model('Post');

// List blog posts
router.get('/', function(req, res) {
    Post.find({}, function(err, items){
        // items -> posts
        res.render('blog/list', { posts : items });
    });
});

// Create Post
// View Post
router.get('/id/:id', function(req, res) {
    Post.findById(req.params.id, function(err, item){
        res.render('blog/view', { blog: item });
    })
});

router.get('/permalink/:permalink', function(req, res){
    //TODO
});
// Remove Post

// DEV -> Create Post
router.get('/dev_create_post', function(req, res) {
    var post = {
        title: "My First Blog Post",
        content: "Pourquoi le Marsupilami a t-il un nombril, alors qu'il naissent dans des œufs ?",
        permalink: "le-marsupilami",
        author: 'Sion',
        date: new Date(),
        published: true
    }
    Post.create(post, function(err, item){
        if(err)
            return res.send(err);
        res.send(item);
    });
});

module.exports = router;
