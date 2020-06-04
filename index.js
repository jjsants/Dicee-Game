


document.querySelector(".btn").addEventListener("click", trowDices);


function trowDices(){
  //dice 1;
  var diceOne = Math.floor(Math.random() * 6) + 1;
  var randomDiceOne = "images/dice"+diceOne+".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomDiceOne);


  //dice 2;
  var diceTwo = Math.floor(Math.random() * 6) + 1;
  var randomDiceTwo = "images/dice"+diceTwo+".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomDiceTwo);

  //displaying the result;

  if(diceOne > diceTwo){
    document.querySelector("h1").innerHTML="Dice 1 Wins 🏁"
  }else if(diceTwo > diceOne){
    document.querySelector("h1").innerHTML="Dice 2 Wins 🏁"
  }else{
    document.querySelector("h1").innerHTML="Draw! Try it again."
  }

}
