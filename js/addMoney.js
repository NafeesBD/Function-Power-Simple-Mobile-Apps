document.getElementById("add-money-button")
  .addEventListener("click", function (event) {

    event.preventDefault();


    const addMoney = inputFieldValueById("input-add-money");

    const pinNum = inputFieldValueById("add-money-pin");

    const totalAmout = textFieldValueById("parent-amount");

    // Check Input Validation Start

    if (isNaN(addMoney)) {
      alert("Please Add Money, Try Again");
      return;
    }

    // Check Input Validation End

    if (pinNum === 1234) {

      const addTotalAmount = totalAmout + addMoney;

      document.getElementById("parent-amount").innerText = addTotalAmount;


      // Transaction Histore Text Add Start

      const pTag = document.createElement("p");

      pTag.innerText = `Add Money ${addMoney} Tk, New Balance ${addTotalAmount} Tk `;

      document.getElementById("transaction-container-add").appendChild(pTag);

      // Transaction Histore Text Add End

    }

    else {
      alert("Not Found, Please Try Again");
    }

  });