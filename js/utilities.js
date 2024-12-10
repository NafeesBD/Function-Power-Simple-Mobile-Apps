// This Function Just Use For Input Value

function inputFieldValueById(id) {

  const inputValue = document.getElementById(id).value;

  const inputNumber = parseFloat(inputValue);

  document.getElementById(id).value = "";

  return inputNumber;

}


// This Function Just Use For Text Field Value

function textFieldValueById(id) {

  const textValue = document.getElementById(id).innerText;

  const textNumber = parseFloat(textValue);

  return textNumber;

}


// Function Button Group

function buttonClickValue(id) {

  document.getElementById("add-money-form").classList.add("hidden");

  document.getElementById("cash-out-form").classList.add("hidden");

  document.getElementById("transaction-histore-text").classList.add("hidden");


  document.getElementById(id).classList.remove("hidden");

}


