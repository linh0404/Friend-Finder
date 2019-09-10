//DEPENDENCIES
var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTER
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//LISTENER
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})