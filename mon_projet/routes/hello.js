var express = require('express');
var router = express.Router();

// :<nom> -> Parametres d'URL
// req.query -> Parametres querl
router.get('/world/:name', function(req, res) {
  res.render('helloWorld',
  { name: req.params.name , 
    query: req.query.id });
});

// req.body -> Parametres de formulaire
router.post('/world/:name', function(req, res) {
    res.render('helloWorld',
    { name: req.body.name});
  });

module.exports = router;
