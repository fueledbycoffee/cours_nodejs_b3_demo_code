var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var isAuth = require('../tools/auth-tools').isAuth;
var Post = mongoose.model('Post');

// List blog posts
router.get('/', function(req, res) {
    Post.find({}, function(err, items){
        // items -> posts
        res.render('blog/list', { posts : items });
    });
});

// Create Post
router.get('/create', isAuth, function(req, res){
    res.render('blog/create');
})

router.post('/create', isAuth, function(req, res) {
    // var post = new Post();
    // post.title = req.body.title;
    // post.author = req.body.author;
    // {...}
    // /!\ Attention faire directement un post = req.body ça peut être dangereux 
    //      -> Aucune verification de l'integrité des données
    var post = req.body;
    post.date = new Date();

    // La petite maison dans la prairie devient 
    // la-petite-maison-dans-la-prairie
    var pl = req.body.title
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, "")
        .replace(/\s+/g, '-');

    post.permalink = pl;

    post.user = req.user;

    Post.create(post, function(err, item) {
        res.redirect("/blog");
    });


});

// View Post
router.get('/id/:id', function(req, res) {
    Post.findById(req.params.id, function(err, item){
        console.log(item);
        res.render('blog/view', { blog: item });
    })
});

router.get('/permalink/:permalink', function(req, res){
    Post.findOne({ permalink : req.params.permalink }).populate('user').exec(function(err, item){
        res.render('blog/view', {blog: item});
    });
});
// Remove Post

router.get("/delete/:id",isAuth, function(req, res) {
    Post.findByIdAndRemove(req.params.id, function(err, item){
        if(err)
            return res.send("Error ! ");
        
        res.redirect('/blog');
    });
});

router.post("/post_comment/:id", function(req, res){
    Post.findById(req.params.id, function(err, item){
        if(err)
            return res.send(err);

            req.body.date = new Date();
            item.comments.push(req.body);
            item.save(function(err, item){
                res.redirect("/blog/permalink/" + item.permalink);
            })
    })
});

// DEV -> Create Post
router.get('/dev_create_post',isAuth, function(req, res) {
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
