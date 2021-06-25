function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstNameInput = document.getElementById("first");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
function closeModal() {
  modalbg.style.display ="none";
}

const btnClose = document.getElementsByClassName('close')[0]
console.log(btnClose);

btnClose
.addEventListener("click", closeModal

);

// form

const form = document.forms[0]
console.log(form);

form.addEventListener("submit", function(e){
 e.preventDefault();
  console.log(firstNameInput.value)
});