let displayNum = "";
let storeNum = "";
let operation = 0;
let nextOperation = 0;
let calculationFinished = false;

function clearDisplay() {
  let display = document.getElementById("display");
  displayNum = "";
  storedNum = "";
  operation = 0;
  nextOperation = 0;

  display.value = displayNum;
}

function numInput(num) {
  let display = document.getElementById("display");
  if ((display.value == "") && num == "0") {
    return;
  } else if (calculationFinished == true) {
    display.value += num;
    calculationFinished = false;
  } else {
    display.value += num;
  }
}

function insertDecimal(dec) {
  let display = document.getElementById('display');
  for (i = 0; i < display.value.lenght; i++)
    if (display.value.charAt(i) == '.') {
      return;
    }
  display.value += dec;
}

function setOperation(command) {
  let display = document.getElementById('display'),
    displayNum = display.value;

  evalDisplay = eval(displayNum),
    evalStored = eval(storedNum);

  if (nextOperation == 0) {
    storedNum = display.value;
  } else if (nextOperation == 1) {
    storeNum = evalStored + evalDisplay;
  } else if (nextOperation == 2) {
    storedNum = evalStored - evalDisplay;
  } else if (nextOperation == 3) {
    storedNum = evalStored * evalDisplay;
  }
  if (command == 'add') {
    operation = 1;
  } else if (command == 'subtract') {
    operation = 2;
  }
  if (command == 'multiply') {
    operation = 3;
  }

  nextOperation = operation;
  display.value = '';
}

function calculate() {
  // Select the calculator's display
  let display = document.getElementById("display");
  displayNum = display.value;
  let evalDisplay = eval(displayNum),
    evalStored = eval(storedNum);

  // Do the math
  if (operation == 1) {
    displayNum = evalStored + evalDisplay;
  } else if (operation == 2) {
    displayNum = evalStored - evalDisplay;
  } else if (operation == 3) {
    displayNum = evalStored * evalDisplay;
  }
  // Change display to the answer
  display.value = displayNum;
  if (operation != 0)
    calculationFinished = true;
  // Clear all the global variables
  // Necessary in case the user wants to make a calculation using the answer
  operation = 0;
  nextOperation = 0;
  displayNum = "";
  storedNum = "";
}
