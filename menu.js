// Menu Program
// 1. Create a menu to prompt the user what they like to do
// 2. Execute an operation depending on what the user chooses

function chooseNumbers() {
  const numberOne = +prompt("Choose a number");
  const numberTwo = +prompt("Choose a number again.");
  return { numberOne, numberTwo }
}

const answer = prompt("Please choose an option!\n1. Add \n2. Subtract \n3. Multiply \n4. Divide")

if (answer.toLowerCase() === 'no') {
  alert("See you latter!")
} else if (+answer === 1) {
  // addition
  const { numberOne, numberTwo } = chooseNumbers();

  const resultElement = document.createElement('p');

  const sumAll = sum(numberOne, numberTwo);

  resultElement.innerText = `The addition of ${numberOne} and ${numberTwo} is ${sumAll}`;

  document.body.appendChild(resultElement);
} else if (+answer === 2) {
  // subtraction
  const { numberOne, numberTwo } = chooseNumbers();
  console.log(difference(numberOne, numberTwo))
} else if (+answer === 3) {
  // multiplication
  const { numberOne, numberTwo } = chooseNumbers();
  console.log(multiplication(numberOne, numberTwo))
} else if (+answer === 4) {
  // divide
  const { numberOne, numberTwo } = chooseNumbers();
  console.log(division(numberOne, numberTwo))
} else {
  alert("Invalid option")
}