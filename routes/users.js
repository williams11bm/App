var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.user.findAll()
  .then(function(users) {
    res.json(users);
  })
});

router.post('/new', function(req, res, next) {
  console.log(req.body);
  db.user.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name
  })
  .then(function(u) {
    res.json(u);
  })
});

module.exports = router;
