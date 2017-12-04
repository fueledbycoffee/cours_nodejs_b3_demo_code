var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../../passport/local_login')(passport);
require('../../passport/local_signup')(passport);
require('../../passport/facebook')(passport);

router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.get('/facebook', passport.authenticate('facebook', {
    scope : ['public_profile', 'email']
}));

router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect : '/auth/login'
}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.post('/login', passport.authenticate('login', {
    successRedirect : '/',
    failureRedirect :'/auth/login'
}));

router.get('/signup', function(req, res){
    res.render('auth/signup');
});

router.post('/signup', passport.authenticate('signup', {
    successRedirect : '/',
    failureRedirect :'/auth/signup'
}));

module.exports = router;
