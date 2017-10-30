const express = require('express');
const bodyParser = require('body-parser');

// Create app
const app = express();
const port = process.env.PORT || 3000;

// Set up app stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

/// SERVING FILES ///
// If the user has no URL parameters, go straight to the homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Listen on port
app.listen(port, function() {
  console.log(`Server launched on port ${port}!`);
});
