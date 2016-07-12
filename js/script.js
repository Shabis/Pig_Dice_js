

$(function() {


  Player.protype.total = function() {
    return totalScore + roundScore;
    }

  var playerOne = new Player("0", "0", "0");
  var playerTwo = new Player("0", "0", "0");


  var roll = function() {
    return Math.floor((Math.random() * 6) + 1);
  };

  var rolledNumber = roll();

  $("button#roll").click(function(event) {
    roll();
    $("div.output").text(rolledNumber);
    event.preventDefault();
  });
});

function player (turnnumber, roundscore, totalscore) {
  this.turnNumber = turnnumber;
  this.roundScore = roundscore;
  this.totalScore = totalscore;
};
