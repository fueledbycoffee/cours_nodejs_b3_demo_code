var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../../passport/local_login')(passport);
require('../../passport/local_signup')(passport);
require('../../passport/facebook')(passport);;
require('../../passport/twitter')(passport);

router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.get('/facebook', passport.authenticate('facebook', {
    scope : ['public_profile', 'email']
}));

router.get('/twitter/callback', passport.authenticate('twitter', {
    successRedirect : '/blog',
    failureRedirect : '/auth/login'
}));

router.get('/twitter', passport.authenticate('twitter', {
    scope : ['public_profile', 'email']
}));

router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect : '/blog',
    failureRedirect : '/auth/login'
}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/blog');
});

router.post('/login', passport.authenticate('login', {
    successRedirect : '/blog',
    failureRedirect :'/auth/login'
}));

router.get('/signup', function(req, res){
    res.render('auth/signup');
});

router.post('/signup', passport.authenticate('signup', {
    successRedirect : '/blog',
    failureRedirect :'/auth/signup'
}));

module.exports = router;
