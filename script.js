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
    cardDetails[index].textContent = cardInputs[index].value;
};

//Looping through the input fields to get each index
for (let i = 0; i < cardInputs.length; i++){
  cardInputs[i].addEventListener('input', () => {
    displayDetailsOnCard(i)
  })
}