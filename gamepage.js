 var y;
var player_name = localStorage.getItem("player_name");
var guess = 1;

playAgain();

function submit(){
    var x = document.getElementById("guessField").value;
    if(x == y)
    {
        alert("Congratulations " + player_name + "!!! You Entered The Correct Answer In "+ "GUESS "   +  guess  );
        guess = 1;
    }
    else if(x > y)
    {
        guess++;
        alert("OOPS SORRY !! TRY A SMALLER NUMBER");
    }
    else
    {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
}

function playAgain(){
    y = Math.floor(Math.random()* 10 + 1);
}