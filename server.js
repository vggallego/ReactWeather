var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 4000;

app.use(function (req, res, next){
    console.log(req.secure);
    next();
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
