var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newroute', function(req, res) {
  res.render('newroute', { title: 'New Route' });
});

//GET users page
//Extracting the db object passed to http req
//fills docs var with db docs(user date)
//renders page
router.get('/animals', function(req, res){
  var db = req.db;
  var animals = db.get('animals');
  animals.find({},{}, function(e, docs){
    res.render('animals', {
      title: 'Animals',
      'animals': docs
    });
  });
});

router.get('/newanimal', function(req, res) {
  res.render('newanimal', {
    title: 'New Animal'
  });
});

//POST to add a new animal to db
router.post('/createanimal', function(req, res){
  var db = req.db;
  var userName = req.body.username;
  var userAnimal = req.body.animal;
  var animals = db.get('animals');
  animals.insert({
    'username' : userName,
    'animal' : userAnimal
  }, function (error, doc) {
    if (error) {
      res.send("Could Not Create A New Animal.");
    } else {
      res.location('animals');
      res.redirect('animals');
    }
  });
});

module.exports = router;
