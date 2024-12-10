document.getElementById("cash-out-button")
  .addEventListener("click", function (event) {

    event.preventDefault();

    const cashOut = inputFieldValueById("input-cash-out");

    const cashPin = inputFieldValueById("cash-out-pin");

    const totalCashOut = textFieldValueById("parent-amount");


    // Check Input Validation Start

    if (isNaN(cashOut)) {
      alert("Please Cash Out, Try Again");
      return;
    }

    // Check Input Validation End

    if (cashPin === 1234) {

      const totalCashOutAmount = totalCashOut - cashOut;

      // Cash Out Enough Money Check Start

      if (cashOut > totalCashOutAmount) {

        alert("You Do Not Have Cash Out Enough Money");

        return;
      }

      // Cash Out Enough Money Check End

      document.getElementById("parent-amount").innerText = totalCashOutAmount;


      // Transaction Histore Text Add Start

      const divTag = document.createElement("div");

      divTag.innerHTML = `

      <h1 class="pb-2 font-bold">Cash Out Transaction</h1>
      
      <p>Cash Out ${cashOut} Tk, New Balance ${totalCashOutAmount} Tk </p>
      
      `;

      document.getElementById("transaction-container-cash-out").appendChild(divTag);

      // Transaction Histore Text Add End

    }

    else {
      alert("Not Found, Please Try Again");
    }

  });