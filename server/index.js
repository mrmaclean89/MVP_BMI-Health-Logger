const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongo = require('mongodb').MongoClient;
const app = express();
const request = require('request');
const router = express.Router();
const Records = require('../database/index.js')
const port = 1128;
const url = 'mongodb://localhost:27017/test';


app.use(bodyParser());

app.use(express.static(__dirname + '/../client/dist'));



router.get('/', function(req, res, next) {
  res.render('index')
}

router.get('/records', function(req, res, next) {
  const result = [];
  mongo.connect(url, function(err, db) {
    if (err) {
      console.log('ERRCNNT')
    }
    const data = db.collection('physRec').find();
    data.forEach(function(doc,err) {
      result.push(doc);
    } function() {
      db.close();
      res.render('index', {records: result});
    });
  });
});


router.post('/record', funtions(req, res) {

  // send all attributes to database (in req.body)
  // take req body, attributes, put into schema format
  // save to databasew

  var record = {
    height: req.body.height,
    weight: req.body.weight,
    bmi: req.body.bmi,
    bmi_class: req.body.bmi_class
  };

  mongo.connect(url, function(err,db) {
    if (err) {console.log('ERRCNNCT')};
    db.collection('physRec').insertOne(record, function(err, result) }{
      if (err) {console.log('ERRINSRT')};
      console.log('Record inserted!');
      db.close();
    })
  })



});






app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
