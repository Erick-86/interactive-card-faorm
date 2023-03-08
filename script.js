"use strict";

//Variables
const cardDetails = document.querySelectorAll(".card-details");
const cardInputs = document.querySelectorAll("input");
console.log(cardDetails);
console.log(cardInputs);

//Submit btn
const submitBtn = document.querySelector(".submit-btn");
const errorMessage = document.querySelectorAll(".error-message");

const formsSection = document.querySelector(".formSections");
const confirmCardSection = document.querySelector(".confirm-card-section");

//INPUT FUNCTION
//A function to replace the text content on the card when a user starts typing in any of the input
//Each index of the input corresponds to its index of the elements on the card
const displayDetailsOnCard = function (index) {
  // Adding space after every 4 values in the number input
  if (index === 1) {
    const cardNumber = cardInputs[1].value.replaceAll(" ", ""); //Remove any existing spaces

    //Add space after every 4 values
    const formatCardNumber = cardNumber.replace(/(.{4})/g, "$1 ");
    cardDetails[index].textContent = formatCardNumber;
  } else {
    cardDetails[index].textContent = cardInputs[index].value;
  }
};

//Looping through the input fields to get each index
for (let i = 0; i < cardInputs.length; i++) {
  cardInputs[i].addEventListener("input", () => {
    displayDetailsOnCard(i);

    //Changing the text content on the card to its initial values when the values in an input is cleared
    if (cardInputs[i].value === "") {
      cardDetails[i].textContent = cardDetails[i].dataset.initialValue;
    }

    //Removing the error border and message when the value in the input is > 1
    //(Thats when a user fill the input)
    if (cardInputs[i].value.trim().length > 0) {
      cardInputs[i].classList.remove("inpur-error");
      // hide the corresponding error message
      errorMessage[i].style.display = "none";
    }
  });

  // Add event listener for "keydown" or "keypress" event
  cardInputs[i].addEventListener("keydown", () => {
    if (cardInputs[i].value.trim().length > 0) {
      cardInputs[i].classList.remove("inpur-error");
    }
  });

  cardDetails[i].dataset.initialValue = cardDetails[i].textContent;
}

//Checking Errors (Empty Input and strings in the number input) when the submit btn is clicked

submitBtn.addEventListener("click", () => {
  let allInputsFilled = true;

  for (let i = 0; i < cardInputs.length; i++) {
    if (!cardInputs[i].value) {
      cardInputs[i].classList.add("inpur-error");

      // display the corresponding error message
      errorMessage[i].style.display = "block";

      //Setting the allInputsFilled to false if there is an error
      allInputsFilled = false;
    } else {
      cardInputs[i].classList.remove("inpur-error");

      // hide the corresponding error message
      errorMessage[i].style.display = "none";
    }

    //Checking if the value in the card number is a string then prompting a warning
    if (i === 1 && cardInputs[i].value && isNaN(cardInputs[i].value)) {
      errorMessage[i].textContent = "Wrong format, numbers only";
      errorMessage[i].style.display = "block";
      cardInputs[i].classList.add("inpur-error");

      //Setting the allInputsFilled to false if there is an error
      allInputsFilled = false;
    }
  }

  if (allInputsFilled) {
    //hide the forms section
    formsSection.style.display = "none";
    //show the confirm card section
    confirmCardSection.style.display = "block";
  }
});
