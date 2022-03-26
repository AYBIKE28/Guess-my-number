'use strict';
let number = Math.trunc(Math.random()*20)+1;
let message =   document.querySelector(".message").textContent;
let score = 20
let highScore = 0

document.querySelector(".check").addEventListener("click", function(){
  const guess = Number( document.querySelector(".guess").value);



// whne there is no input
  if (!guess){
    document.querySelector(".message").textContent = "No Number";
    // when answer is right
  }else if (guess === number){
    document.querySelector(".message").textContent = "Correct";
    document.querySelector(".number").textContent = number;
document.querySelector("body").style.backgroundColor = "#60b347";
document.querySelector(".number").style.width = "30rem";
if (score>highScore){
  highScore = score;
  document.querySelector(".highscore").textContent = highScore ;
};
}

//when guess is higher
  else if (guess > number){
    if (score > 0){
  document.querySelector(".message").textContent = "Too High";
    score -=1;
    document.querySelector(".score").textContent = score;}else{
      document.querySelector(".message").textContent = "Game Over";
    }
    //When guess is lower
  }else if ( guess < number){
    if (score > 0){
    document.querySelector(".message").textContent = "Too Low";
    score -=1;
    document.querySelector(".score").textContent = score}else{
      document.querySelector(".message").textContent = "Game Over";
    }
  }
});

// again button

document.querySelector(".again").addEventListener("click", function(){
  number = Math.trunc(Math.random()*20)+1;
  score = 20;
  document.querySelector(".number").style.width = "15rem" ;
  document.querySelector(".number").textContent = "?" ;
  document.querySelector(".message").textContent = "Star Guessing...";
  document.querySelector(".score").textContent = score ;
  document.querySelector(".guess").value  = "" ;
  document.querySelector("body").style.backgroundColor = "#222";

})
