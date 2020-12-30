const express = require("express");
const bodyParser = require("body-parser");
const port = 8080;

const app = express();

console.log('Starting Server on: ' + port + ' ...');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const codingEnv = app.get('env');

switch (codingEnv) {
  case 'development':
    console.log("Starting Server in development mode")
    break;
  case 'production':
    console.log("Starting Server in production mode")
    break;
}

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Forum of Group 1." });
});

require('./api/routes/ForumRoutes')(app);

app.listen(port, () => {
  console.log("Server is running on port 8080.");
});
