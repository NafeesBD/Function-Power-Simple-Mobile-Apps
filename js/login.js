document.getElementById("login-button")
  .addEventListener("click", function (event) {

    event.preventDefault();

    const userNum = inputFieldValueById("phone-number");

    const userPin = inputFieldValueById("pin-number");

    if (userNum === 5 && userPin === 1234) {

      window.location.href = "home.html"

    }

    else {
      alert("Please Enter Your Phone OR Pin Number");
    }

  });