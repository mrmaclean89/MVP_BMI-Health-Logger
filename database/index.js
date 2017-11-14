

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/records', {useMongoClient: true});

var db = mongoose.connection;

var Schema = mongoose.Schema;

var physRecs = new Schema({

  height: Number,
  weight: Number,
  bmi: Number,
  bmi_class: String

});

var physRec = mongoose.model('physRec', physRecs);



  // var person = new Record({
  //   height: 100,
  //   weight: 150,
  //   bmi: 29,
  //   bmi_class: 'Obese',
  // });







