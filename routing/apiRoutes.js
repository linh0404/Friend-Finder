//LOAD DATA
var friendsData = require ("../app/data/friends");
var path = require("path");
var fs = require("fs");

//ROUTING
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    
    app.post("/api/friends", function(req, res) {
        var friendInput = req.body;
        var parsedRes = friendInput.results.map(function(s) {
            return parseInt(s, 10);
          });
        friendInput.results = parsedRes;
        friendsData.push(friendInput);

        convertAnswers(friendInput);
        
        var bestFriend = compareFriends(friendsData, friendInput);

        res.status(200).json(bestFriend)
    });
};

function convertAnswers(friendInput) {

    var current = friendInput;
    // console.log(current);

    var curResults = current.results;

    for (i=0; i < curResults.length; i++) {
        curResults[i] = parseInt(curResults[i]);
    }

    // for (i=0; i<friendsData.length; i++) {
    //     var score = friendsData[i].results.reduce(function(a,b) {
    //         return a + b;
    //     });
    //     console.log(score);
    // };
};

function compareFriends(friendsData, friendInput) {
    var matchFriend;
    var matchScores = [];
    var matchScore = 0;
    var curResults = friendInput.results;

    for (i=0; i<friendsData.length-1; i++) {
        matchFriend = friendsData[i].results;
        // console.log(matchFriend);

        for (j=0; j<matchFriend.length; j++) {
            var absDiff = Math.abs(curResults[j] - matchFriend[j]);
            matchScore += absDiff;
        }

        matchScores.push(matchScore);

        matchScore = 0;
    }

    console.log(matchScores);

    // var curFriend = friendInput.results.reduce(function(a,b){
    //     return a + b;
    // });
    // var score = friendsData[i].results.reduce(function(a,b) {
    //     return a + b;
    // });

    // console.log(curFriend);
    // var comparison = curFriend - score;
    // console.log(comparison);

    var lowestScore = Math.min(...matchScores);
    console.log(lowestScore);

    var matchIndex = matchScores.indexOf(lowestScore);

    var bestFriend = friendsData[matchIndex];

    friendInput.bestie = bestFriend;

    return bestFriend;

}
