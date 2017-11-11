const express = require('express');
const request = require('request');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

// app.post('/', funtions(req, res) {

  // request(options, function(err, res, body) {

  // });

//   res.send('POSTED')
// });

app.get('/', (req, res) => res.send('Hello World!'));





let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
