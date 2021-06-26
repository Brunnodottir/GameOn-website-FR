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
const btnClose = document.getElementsByClassName('close')[0]
const btnSubmit = document.getElementsByClassName('btn-submit');
//Form DOM Elements
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const email = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const tournoi = document.getElementById("quantity");
const newYork = document.getElementById("location1");
const sanFrancisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const villes = [newYork, sanFrancisco, seattle, chicago, boston, portland];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form on click
function closeModal() {
  modalbg.style.display ="none";
}


btnClose
.addEventListener("click", closeModal


);

// submit form
form.addEventListener("submit", function(e){
  e.preventDefault();


// form validation

// NAME

firstNameInput.addEventListener('input', function(e) {
  var value = e.target.value;
  if (value.startsWith('Hello ')) {
      isValid = true;
  } else {
      isValid = false;
  }
});

// PRENOM

lastNameInput.addEventListener('input', function(e) {
  var value = e.target.value;
  if (value.startsWith('Hello')){
      isValid = true;
      console.log('Hello');
  } else {
    isValid =false;
    console.log('Oups');
  }
});


//const firstNameInput if (firstNameInput.value == valeur) {console.log ('test')}

//EMAIL

email.addEventListener('input', function(e) {
  var value = e.target.value;
  if (value.startsWith('Hello')){
      isValid = true;
      console.log('Hello');
  } else {
    isValid =false;
    console.log('Oups');
  }
});

//BIRTHDATE

birthdateInput.addEventListener('input', function(e) {
  var value = e.target.value;
  if (value.startsWith('Hello')){
      isValid = true;
      console.log('Hello');
  } else {
    isValid =false;
    console.log('Oups');
  }
});
//NUMBER

///CITY


const formValid = document.getElementById("submit");
  


})


