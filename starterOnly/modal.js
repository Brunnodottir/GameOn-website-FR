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
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const tournoi = document.querySelector("#quantity");
const city = document.querySelectorAll("#city .checkbox-input");
const cityLocation = document.querySelector("#city");
const checkbox1 = document.querySelector("#checkbox1")

// Confirmed form DOM Element
const confirmModal = document.querySelector(".confirm-modal-submit");
const btnSubmit = document.getElementsByClassName('btn-submit');
const btnCloseSubmit = document.getElementsByClassName('close')[1]
const btnConfirm = document.querySelector("#btn-confirm");


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
  if (value.trim().length >= 2) {
    formData[1].setAttribute("data-error-visible", "false")
    return true;
  } else {
    //Une erreur est survenue
    formData[1].setAttribute("data-error", "Veuillez renseigner votre nom")
    formData[1].setAttribute("data-error-visible", "true")

    return false;

  }
}

//EMAIL Validation
const isEmailValid = () => {
  const value = email.value;
  let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (email.value.trim().match(regexEmail)) {
        email.parentElement.setAttribute("data-error-visible", "false")
        return true; 
  } else {
    formData[2].setAttribute("data-error", "Veuillez renseigner une adresse email valide")
    formData[2].setAttribute("data-error-visible", "true")

    return false


  }

}

//BIRTHDATE VALIDATION
const isDateValid = () => {
  const formDataParent = birthdateInput.parentNode;
  console.log(formDataParent)

  const value = birthdateInput.value;
  const birthdate = new Date(value);
  const now = new Date();
  let minDate = new Date("1935-01-01");
  
  if (now - birthdate > 0  || birthdate < minDate) {
    formDataParent.setAttribute("data-error-visible", "false")
    return true;
  } else {
    formDataParent.setAttribute("data-error", "Veuillez renseigner une date")
    formDataParent.setAttribute("data-error-visible", "true")

    return false;

  }

}

// QUANTITY VALIDATION
const isQuantityValid = () => {
  const value = tournoi.value;
  let regexQuantity = /^[1-9]\d*$/gm;
  if (value !== "" && regexQuantity.test(value)) {
    formData[4].setAttribute("data-error-visible", "false")
    return true;
  } else {
    formData[4].setAttribute("data-error", "Veuillez renseigner un nombre")
    formData[4].setAttribute("data-error-visible", "true")
    console.log("test")
    return false;

  }
}

//LOCATION VALIDATION

const isCityValid = () => {

  let isChecked = false;

  for (let i = 0; i < city.length; i++) {
    if (city[i].checked) {
      isChecked = true;
    }

  }
  if (!isChecked) {
    formData[5].setAttribute("data-error", "Veuillez sélectionner une ville")
    formData[5].setAttribute("data-error-visible", "true")
    return false;
  } else {
    cityLocation.setAttribute("data-error-visible", "false")
    return true
  }
}

// CHECKBOX VALIDATION (Conditions d'utilisation générales)
const isCheckboxValid = () => {
  if (checkbox1.checked === true) {
    formData[6].setAttribute("data-error-visible", "false")
    return true;
  } else {
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
  confirmModal.style.display = "block";

}

// close modal form on click
function closeModal() {
  modalbg.style.display = "none";
}


btnClose
  .addEventListener("click", closeModal


  );

// close modal confirmed on click

function closeValidationModal() {
  confirmModal.style.display = "none";

}

btnCloseSubmit
  .addEventListener("click", closeValidationModal)
btnConfirm
  .addEventListener("click", closeValidationModal)




// ALL FIELDS form VALIDATION (Vérification de tous les champs)
form.addEventListener("submit", function (e) {
  e.preventDefault(); //Bloque le rafraichissement de la page//

  const validFirstName = isFirstValid();
  const validLastName = isLastValid();
  const validBirthDate = isDateValid();
  const validEmail = isEmailValid();
  const validQuantity = isQuantityValid();
  const validCity = isCityValid();
  const validCheckbox = isCheckboxValid();
  if (
    validFirstName && validLastName && validBirthDate && validEmail && validQuantity && validCity && validCheckbox) {
    launchModal()
    document.querySelector('form').reset(); //Efface les champs après soumission//
    closeModal();
    launchValidationModal() // lance le message de confirmation//

  } else {
    return false
  }











})