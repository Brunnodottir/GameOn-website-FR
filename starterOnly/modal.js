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
const city = document.querySelectorAll ("#city .checkbox-input")
const cityLocation = document.getElementById("city")
const checkbox1 = document.getElementById("checkbox1")

// NAME
const isFirstValid = () => {
  const value = firstNameInput.value;
  if (value.trim().length >= 2) {
    formData[0].setAttribute("data-error-visible", "false")
      return true;
  } else {
    formData[0].setAttribute("data-error", "Veuillez renseigner votre prénom")
    formData[0].setAttribute("data-error-visible", "true")

      return false;

  }
}

const isLastValid = () => {
  const value = lastNameInput.value;
  if (value.trim().length >= 2 ) {
    formData[1].setAttribute("data-error-visible", "false")
    return true;
  } else {
    formData[1].setAttribute("data-error", "Veuillez renseigner votre nom")
    formData[1].setAttribute("data-error-visible", "true")

  return false;

  }
}

//EMAIL 
const isEmailValid = () => {
  const value = email.value;
  const atPosition = value.indexOf("@");
  const dotPosition = value.lastIndexOf(".");
  if (atPosition>1 || dotPosition>atPosition+2 || dotPosition+2<=value.length){
    formData[2].setAttribute("data-error-visible", "false")
    return true;
  }else{
    formData[2].setAttribute("data-error", "Veuillez renseigner une adresse email valide")
    formData[2].setAttribute("data-error-visible", "true")

    return false


  }
  
}

//DATE
const isDateValid =() =>{

  const value = birthdateInput.value;
  const birthdate = new Date(value);
  const now = new Date();
  console.log(now - birthdate);
  if (now - birthdate > 0) {
    formData[3].setAttribute("data-error-visible", "false")
      return true;
  } else {
    formData[3].setAttribute("data-error", "Veuillez renseigner une date")
    formData[3].setAttribute("data-error-visible", "true")

      return false;

  }

}

// QUANTITY
const isQuantityValid =() =>{

  const value = tournoi.value;
  if (value != "") {
    formData[4].setAttribute("data-error-visible", "false")
    return true;
 }else{
  formData[4].setAttribute("data-error", "Veuillez renseigner un nombre")
  formData[4].setAttribute("data-error-visible", "true")
   
  return false;

 } 
}

//location

const isCityValid =() => {

cityLocation.setAttribute("data-error-visible", "true")
for (let i = 0; i< city.length; i++) {
  if (city[i].checked){
    cityLocation.setAttribute("data-error-visible", "false")
    return true

}else {
  return false;
}
}}

// Conditions d'utilisation géénrales
const isCheckboxValid = () => {
  if(checkbox1.checked === true){
    formData[4].setAttribute("data-error-visible", "false")
    return true;
 }else{
  formData[6].setAttribute("data-error", "Veuillez accepter les conditions d'utilisation")
  formData[6].setAttribute("data-error-visible", "true")
   
  return false;
  }
}


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

//  form VALIDATION
form.addEventListener("submit", function(e){
  e.preventDefault();

if (
  isFirstValid() && isDateValid() && isLastValid() && isEmailValid && isQuantityValid && isCityValid && isCheckboxValid ) {
console.log("Ok") // launch modalSubmittedForm + .reset
//+ message (alert ? = formulaire validé !)
  } else {
    console.log('Erreur'); // faire une const check ?
  }


// form validation



//console.log(isFirstValid());
// VERIFICATION DES CHAMPS
isFirstValid
isLastValid();
isDateValid();
isEmailValid();
isQuantityValid();
isCityValid();
isCheckboxValid();





//const firstNameInput if (firstNameInput.value == valeur) {console.log ('test')}




// VALIDATION TOUS

})


// const de validation finale =() => {
// if (isFirstNameValid() === true && 
// isLastNameValid( === true && etc.)
// return true
// else return false

//SOUMISSION FORMULAIRE
//* form.addEventListener("submit", (e) =>{ *bloque le raffraichissement de la page = e.preventefault});
//if (const de validation finale === true )
// lauch modal completed
// else => affiche les champs mal remplis
// checkAllFields





