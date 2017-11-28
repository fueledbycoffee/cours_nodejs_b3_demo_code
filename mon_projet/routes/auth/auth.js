var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../../passport/local_login')(passport);
require('../../passport/local_signup')(passport);

router.get('/login', function(req, res) {
  res.render('auth/login');
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
