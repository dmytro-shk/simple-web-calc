const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const resetBtn = document.getElementById('btn-reset');
const reloadBtn = document.getElementById('btn-reload');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function clearInputValue() {
  userInput.value = '';
}

function resetCalc() {
  const defaultResult = 0;
  const calcDescription = defaultResult;
  outputResult(defaultResult, calcDescription);
  userInput.value = defaultResult;
  logEntries = [];
  console.clear();
}

function reloadCalc() {
  location.reload();
}
