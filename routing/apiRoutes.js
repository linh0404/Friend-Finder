//LOAD DATA
var friendsData = require ("../app/data/friends");
var path = require("path");
var fs = require("fs");

//ROUTING
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
}

