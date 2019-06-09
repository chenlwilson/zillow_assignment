var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));

app.listen(PORT, (err) => {
  if (err) {
    console.log('fail to start server')
  } else {
    console.log(`server listening on port ${PORT}`)
  }
});

module.exports = app;