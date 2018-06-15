


//Global Varablies 
//--------------------------------------

//Crystal Varables
var Crystal = {
    Crystal1:
    {
        name:"Crystal1",
        value: 0

    },
    Crystal2:
    {
        name:"Crystal2",
        value: 0
    },
    Crystal3:
    {
        name:"Crystal3",
        value: 0
    },
    Crystal4:
    {
        name:"Crystal4",
        value: 0
    }
    
};

// Score (Current and Target)
var currentScore = 0;
var targetScore  = 0;


// Wins and Losses
var winCount  = 0;
var lossCount = 0; 


// Functios
//-------------------------------------- 

var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
// // Start the game and restart the game  
var startGame = function() {

    currentScore = 0;

    targetScore = getRandom(19,120);

    Crystal.Crystal1.value = getRandom(1, 12);
    Crystal.Crystal2.value = getRandom(1, 12);
    Crystal.Crystal3.value = getRandom(1, 12);
    Crystal.Crystal4.value = getRandom(1, 12);


    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);  

    console.log("--------------------------")
    console.log("Target Score:" + targetScore);
    console.log("Crystal1: " + Crystal.Crystal1.value + "| Crystal2: " + Crystal.Crystal2.value + " | Crystal3: " + Crystal.Crystal3.value + "| Crystal4: " + Crystal.Crystal4.value);
    console.log("--------------------------")

}


var addValues = function(Crystal) {
    // change the cuurntScore 
    currentScore = currentScore + Crystal.value;
    // change the HTML to reflect change in curentSore 
    $("#yourScore").html(currentScore);

    // call checkWin function
    checkWin();
    // testing colsloe
    console.log("Your Score;"+ currentScore);

}
// chec if user  won or lost and reset the Game
var checkWin = function() {
    if(currentScore > targetScore){
        alert("Sorry.You lost!");
        console.log("You Lost");
        // Add to loss counter 
        lossCount++;

        // Change loss count html
        $("#lossCount").html(lossCount);
        startGame();

    }
    else if (currentScore == targetScore){
        alert("Congratulations ! You Won!");
        console.log("You Won");

        //Add to the win counter
        winCount++;
        // Change Win count html
        $("#winCount").html(winCount);

        //Restart the game 
        startGame();
        

    }
}





// // Mian Process
// //---------------------------------
// startGame();
startGame();
$("#Crystal1").click(function() {
    // alert("اليعبري");
   addValues(Crystal.Crystal1); 
});
$("#Crystal2").click(function() {
   addValues(Crystal.Crystal2);
//    alert(" هشام");
});
$("#Crystal3").click(function() {
   addValues(Crystal.Crystal3);
//    alert("احمد");
});
$("#Crystal4").click(function() {
   addValues(Crystal.Crystal4);
//   alert("الحزم");
});

