//Taking the inputs from the form
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");

function collectingInput(event) {
  event.preventDefault();
  const diceNumberInput = document.getElementById('diceNumber');
  const diceNumber = diceNumberInput.value;
  const diceTypeInputs = document.getElementsByName('diceType');
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
  const randomNumber = document.getElementById("randomNumber");
  dice1.textContent=`${arrDice[0]}`;
  dice2.textContent=`${arrDice[1]}`;
  dice3.textContent=`${arrDice[2]}`;
  dice4.textContent=`${arrDice[3]}`;
  randomNumber.textContent = `${sum} `;

  switch (diceNumber){
    case "1":
      dice1.style.display= "block";
      dice2.style.display= "none";
      dice3.style.display= "none";
      dice4.style.display= "none";
      break;
    case "2":
      dice1.style.display= "block";
      dice2.style.display= "block";
      dice3.style.display= "none";
      dice4.style.display= "none";
      break;
    case "3":
      dice1.style.display= "block";
      dice2.style.display= "block";
      dice3.style.display= "block";
      dice4.style.display= "none";
      break;
    case "4":
      dice1.style.display= "block";
      dice2.style.display= "block";
      dice3.style.display= "block";
      dice4.style.display= "block";
      break;
          }
}





