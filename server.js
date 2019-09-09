//DEPENDENCIES
var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})