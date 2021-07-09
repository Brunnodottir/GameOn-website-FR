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

//Form DOM Elements
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const email = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const tournoi = document.getElementById("quantity");
const city = document.querySelectorAll ("#city .checkbox-input");
const cityLocation = document.getElementById("city");
const checkbox1 = document.getElementById("checkbox1")

// Confirmed form DOM Element
const confirmModal= document.querySelector(".confirm-modal-submit");
const btnSubmit = document.getElementsByClassName('btn-submit');
const btnCloseSubmit = document.getElementsByClassName('close')[1]
const btnConfirm = document.getElementById("btn-confirm");


// FIRSTNAME Validation
const isFirstValid = () => {
  const value = firstNameInput.value;
  //Si le nom fait moins de 2 caractères
  if (value.trim().length >= 2) {
    formData[0].setAttribute("data-error-visible", "false")
      return true;
  } else {
    //Une erreur est survenue
    formData[0].setAttribute("data-error", "Veuillez renseigner votre prénom")
    formData[0].setAttribute("data-error-visible", "true")

      return false;

  }
}

// LASTNAME Validation
const isLastValid = () => {
  const value = lastNameInput.value;
    //Si le nom fait moins de 2 caractères
  if (value.trim().length >= 2 ) {
    formData[1].setAttribute("data-error-visible", "false")
    return true;
  } else {
        //Une erreur est survenue
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
  console.log(formData[4]);
  if (value !== "") {
    formData[4].setAttribute("data-error-visible", "false")
    console.log("ok");
    return true;
 }else{
  formData[4].setAttribute("data-error", "Veuillez renseigner un nombre")
  formData[4].setAttribute("data-error-visible", "true")
  return false;

 } 
}

//location

const isCityValid =() => {

let isChecked = false;

for (let i = 0; i< city.length; i++) {
  if (city[i].checked){
    isChecked = true;
}

}
console.log(isChecked)
if (!isChecked)
{
  formData[5].setAttribute("data-error", "Veuillez sélectionner une ville")
  formData[5].setAttribute("data-error-visible", "true")
 return false;
} else {
  cityLocation.setAttribute("data-error-visible", "false")
return true
}
}

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

// launch modal confirmed
function launchValidationModal() {
  confirmModal.style.display ="block";

}

// close modal form on click
function closeModal() {
  modalbg.style.display ="none";
}


btnClose
.addEventListener("click", closeModal


);

// close modal confirmed on click

function closeValidationModal(){
  confirmModal.style.display ="none";

}

btnCloseSubmit
.addEventListener("click", closeValidationModal)
btnConfirm
.addEventListener("click", closeValidationModal)




//  form VALIDATION
form.addEventListener("submit", function(e){
  e.preventDefault();

  const validFirstName = isFirstValid();
  const validLastName = isLastValid();
  const validBirthDate = isDateValid();
  const validEmail = isEmailValid();
  const validQuantity = isQuantityValid();
  const validCity = isCityValid();
  const validCheckbox = isCheckboxValid();
if (
  validFirstName && validLastName   && validBirthDate &&  validEmail && validQuantity && validCity && validCheckbox ) {
launchModal()
document.querySelector('form').reset();
closeModal();
launchValidationModal()

  } else {
    console.log('Erreur'); // faire une const check ?
  }







//SOUMISSION FORMULAIRE

//* form.addEventListener("submit", (e) =>{ *bloque le raffraichissement de la page = e.preventefault});
//if (const de validation finale === true )
// lauch modal completed
// else => affiche les champs mal remplis
// checkAllFields





})