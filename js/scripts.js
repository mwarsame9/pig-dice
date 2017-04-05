//business logic

// function on player object, has 2 properties- score and roll
function Player(currentScore, totalScore, roll, hold, win) {
  this.currentScore = 0;
  this.totalScore = 0;
  this.roll = roll;
  this.hold = hold;
  this.win = 100;
}

// prototype using rollDie method with function to return a a random number when die is rolled.
Player.prototype.rollDie = function() {
  this.roll = Math.floor((Math.random() * 6) + 1);
};

// Player.prototype.holdScore = function () {
//   this.
// };

//front end logic

$(document).ready(function(){
  //define player 1 & 2 as functions
  var player1 = new Player();
  var player2 = new Player();
  //show total score for each player
  $("#p1currentScore").text(player1.currentScore);
  $("#p2currentScore").text(player2.currentScore);
  // $("#currentScore").text(currentScore.score);
  //program sees player 1 using click method to roll
  $("dl#p1roll").click(function(event) {
    event.preventDefault();
    //rollDie method on player1 stores number that is generated
    player1.rollDie();
    console.log(player1.roll);
    //conditional statement for when player1 roll equals 1
      if (player1.roll === 1) {
        //show 'bust' or turn is over for player1
        $(".p1roll").text("bust!");
        //hide roll & hold options for player1
        // $("dl#p1hold").hide();
        $("dl#p1roll").hide();
        $("dl#p1hold").hide();
        //show roll & hold options for next player, player2
        $("#p2roll").show();
        $("#p2hold").show();
        //-------------------------to do: show totalScore with no points added
      }
      else if (player1.totalScore >= 100) {
        //show 'bust' or turn is over for player1
        $(".p1roll").text("WINNER!");
        //hide roll & hold options for player1
        // $("dl#p1hold").hide();
        $("dl#p1roll").hide();
        $("dl#p1hold").hide();
        //show roll & hold options for next player, player2
        $("#p2roll").hide();
        $("#p2hold").hide();
        //-------------------------to do: show totalScore with no points added

      }
      else  {
        //roll is not equal to 1 & adds to score
        player1.currentScore = (player1.currentScore + player1.roll);
        //displays score in score box
        $("#p1currentScore").text(player1.currentScore);

        //gives user option to roll again
        $(".p1roll").text(player1.roll);
        //second click function for player to roll die again
        $("dl#p1roll").click(function(event){
          // rollDie method on player1
          player1.rollDie();

          //$("#p1Score").text(player1.score);
        })
      }

    });
    //
      $(function() {
  	$("#p1hold").click(function() {
      player1.totalScore = (player1.totalScore + player1.currentScore);
      $("#p1Score").text(player1.totalScore);
      $("dl#p1roll").hide();
      $("dl#p1hold").hide();
      $("#p2roll").show();
      $("#p2hold").show();
      });
    });

// ---------------------------------------------------------Player 2
  $("dl#p2roll").click(function(event) {
    event.preventDefault();
    //rollDie method on player1 stores number that is generated
    player2.rollDie();
    console.log(player2.roll);
    //conditional statement for when player1 roll equals 1
      if (player2.roll === 1) {
        //show 'bust' or turn is over for player1
        $(".p2roll").text("bust!");
        //hide roll & hold options for player1
        // $("dl#p1hold").hide();
        $("dl#p2roll").hide();
        $("dl#p2hold").hide();
        //show roll & hold options for next player, player2
        $("#p1roll").show();
        $("#p1hold").show();
        //-------------------------to do: show totalScore with no points added
      } else if (player2.currentScore >= 100) {
        //show 'bust' or turn is over for player1
        $(".p2roll").text("WINNER!");
        //hide roll & hold options for player1
        // $("dl#p1hold").hide();
        $("dl#p1roll").hide();
        $("dl#p1hold").hide();
        //show roll & hold options for next player, player2
        $("#p2roll").hide();
        $("#p2hold").hide();
        //-------------------------to do: show totalScore with no points added

      } else {
        //roll is not equal to 1 & adds to score
        player2.currentScore = (player2.currentScore + player2.roll);
        //displays score in score box
        $("#p2currentScore").text(player2.currentScore);
        //gives user option to roll again
        $(".p2roll").text(player2.roll);
        //second click function for player to roll die again
        $("dl#p2roll").click(function(event){
          // rollDie method on player1
          player2.rollDie();

          //$("#p1Score").text(player1.score);
          });
      }
    //

  });
  $(function() {
  $("#p2hold").click(function() {
    player2.totalScore = (player2.totalScore + player2.currentScore);
    $("#p2Score").text(player2.totalScore);
    $("dl#p2roll").hide();
    $("dl#p2hold").hide();
    $("#p1roll").show();
    $("#p1hold").show();

    });

  });
});
