'use strict'

//Variables
const cardDetails = document.querySelectorAll(".card-details");
const cardInputs = document.querySelectorAll("input");
console.log(cardDetails)
console.log(cardInputs);


//INPUT FUNCTION
//A function to replace the text content on the card when a user starts typing in any of the input
//Each index of the input corresponds to its index of the elements on the card
const displayDetailsOnCard = function (index) {

  // Adding space after every 4 values in the number input
  if (index === 1) {
    const cardNumber = cardInputs[1].value.replaceAll(" ", ""); //Remove any existing spaces
     
    //Add space after every 4 values
    const formatCardNumber = cardNumber.replace(/(.{4})/g, "$1 ");
    cardDetails[index].textContent = formatCardNumber
  } else {
    cardDetails[index].textContent = cardInputs[index].value;
  }
};

//Looping through the input fields to get each index
for (let i = 0; i < cardInputs.length; i++){
  cardInputs[i].addEventListener('input', () => {
    displayDetailsOnCard(i)

    //Changing the text content on the card to its initial values when the values in an input is cleared
    if (cardInputs[i].value === "") {
      cardDetails[i].textContent = cardDetails[i].dataset.initialValue
    }
  })
  cardDetails[i].dataset.initialValue = cardDetails[i].textContent
}