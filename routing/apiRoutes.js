//LOAD DATA
var friendsData = require ("../app/data/friends");

//ROUTING
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
}

