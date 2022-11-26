const defaultResult = 0;
const defaultCalcDescription = "";
const calculationTypes = ["ADD", "SUBTRACT", "MULTIPLY", "DIVIDE"];
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

//Console log tool
function writeToLog(operation, prevResult, currentNumber, newResult) {
  logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: currentNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry);
}

//Main calc function
function calculateResult(calculationType) {
  if (!calculationTypes.includes(calculationType)) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(mathOperator, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
  clearInputValue();
}

function subtract() {
  calculateResult("SUBTRACT");
  clearInputValue();
}

function multiply() {
  calculateResult("MULTIPLY");
  clearInputValue();
}

function divide() {
  calculateResult("DIVIDE");
  clearInputValue();
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
resetBtn.addEventListener("click", resetCalc);
reloadBtn.addEventListener("click", reloadCalc);
