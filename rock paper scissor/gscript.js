let you = 0;
let comp = 0;
const choices= document.querySelectorAll(".select");
const msgPara= document.querySelector("#msg");

const userScorePara = document.body.querySelector("#user-score");
const compScorePara = document.body.querySelector("#comp-score");

const genCompChoice = () =>{
  const options = ["rock", "paper", "scissors"];  
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
 
const drawGame = () =>{
  msgPara.innerText = "Game was Draw. Play again."
  msgPara.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, CompChoice) =>{
  if(userWin){
    you++;
    userScorePara.innerText = you;
  msgPara.innerText= `You win! Your ${userChoice} beats ${CompChoice}`;
  msgPara.style.backgroundColor = "green";
}else{
  comp++;
  compScorePara.innerText = comp;
  msgPara.innerText= `You lost! Your ${CompChoice} beats ${userChoice}`;
  msgPara.style.backgroundColor = "red";
}
};
const playGame= (userChoice) =>{
  const CompChoice = genCompChoice();
  if(userChoice === CompChoice ){
    drawGame();
  }else {
    let userWin = true;
    if(userChoice === "rock"){
      userWin = CompChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
      userWin = CompChoice === "scissors" ? false : true;
    }
    else{
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
  }
};

choices.forEach((choice) =>{
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  } );
});