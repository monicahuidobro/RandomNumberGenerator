//Taking the inputs from the form

function collectingInput1 (event) {
  event.preventDefault();
  calculation("diceNumber1", "diceType1", "randomNumber1","dice1-1", "dice2-1", "dice3-1", "dice4-1");
  document.getElementById("button1").disabled = true;
}
function collectingInput2 (event) {
  event.preventDefault();
  calculation("diceNumber2", "diceType2", "randomNumber2","dice1-2", "dice2-2", "dice3-2", "dice4-2");
  document.getElementById("button2").disabled = true;
}


function calculation(number, type , random, dice1, dice2, dice3, dice4) {
  const diceNumberInput = document.getElementById(number);
  const diceNumber = diceNumberInput.value;
  const diceTypeInputs = document.getElementsByName(type);
  let diceType;
  for (let i = 0; i < diceTypeInputs.length; i++) {
    if (diceTypeInputs[i].checked) {
      diceType = diceTypeInputs[i].value;
      break;
    }
  }

  const arrDice =[];
  let sum = 0;
  for (let i = 0 ; i < diceNumber; i++){
    arrDice[i] = Math.floor(Math.random()*diceType)+1;
    sum = sum + arrDice[i]; 
  };
  const randomNumber = document.getElementById(random);
  document.getElementById(dice1).textContent=`${arrDice[0]}`;
  document.getElementById(dice2).textContent=`${arrDice[1]}`;
  document.getElementById(dice3).textContent=`${arrDice[2]}`;
  document.getElementById(dice4).textContent=`${arrDice[3]}`;
  randomNumber.textContent = `${sum} `;

  switch (diceNumber){
    case "2":
      document.getElementById(dice2).style.display= "flex";
      break;
    case "3":
      document.getElementById(dice2).style.display= "flex";
      document.getElementById(dice3).style.display= "flex";
      break;
    case "4":
      document.getElementById(dice2).style.display= "flex";
      document.getElementById(dice3).style.display= "flex";
      document.getElementById(dice4).style.display= "flex";
      break;
  }
};

document.getElementById("restart").disabled = true;




document.getElementById("solve").addEventListener("click", function() {
  if(document.getElementById("randomNumber1").textContent > document.getElementById("randomNumber2").textContent) {
    document.getElementById("winner").textContent = "Player 1 wins";
    document.getElementById("player1").style.backgroundColor="rgb(162, 255, 139)";
    document.getElementById("solve").disabled = true;
    document.getElementById("restart").disabled = false;
  } else if (document.getElementById("randomNumber1").textContent < document.getElementById("randomNumber2").textContent) {
    document.getElementById("winner").textContent = "Player 2 wins";
    document.getElementById("player2").style.backgroundColor="rgb(162, 255, 139)";
    document.getElementById("solve").disabled = true;
    document.getElementById("restart").disabled = false;
  } else if (document.getElementById("randomNumber1").textContent === document.getElementById("randomNumber2").textContent){
    document.getElementById("winner").textContent = "Tie";
    document.getElementById("solve").disabled = true;
    document.getElementById("restart").disabled = false;
  }
});

document.getElementById("restart").addEventListener("click", function() {
  window.location.reload(true);
});

