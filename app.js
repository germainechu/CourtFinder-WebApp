const express = require('express');
const app = express();
var path = require("path");
var routes = require("./route") // this gets route.js directory

app.use(express.json()); // for parsing application/json

// OPEN PORT = 3000
const PORT = process.env.PORT || 3000;

// need to define VIEW ENGINE and VIEW LOCATIOn
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
