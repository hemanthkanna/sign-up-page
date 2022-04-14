const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');
const firstName_error = document.querySelector('#firstname-error');
const lastName_error = document.querySelector('#lastname-error');
const email_error = document.querySelector('#email-error');
const phoneNumber_error = document.querySelector('#phonenumber-error');
const password_error = document.querySelector('#password-error');
const confirm_password_error = document.querySelector('#confirm-password-error');

function errorMessage() {
  firstName.addEventListener('input', (event) => {
    if(firstName.validity.patternMismatch ) {
      firstName_error.textContent = "please enter a valid first name";
    } else {
      firstName_error.textContent = '';
    }
  })
  lastName.addEventListener('input' ,(event) => {
    if (lastName.validity.patternMismatch) {
      lastName_error.textContent = "please enter a valid last name";
    } else {
      lastName_error.textContent = '';
    }
  })
  email.addEventListener('input',(event) => {
    if (email.validity.typeMismatch) {
      email_error.textContent = "please enter a valid email";
    } else {
      email_error.textContent = '';
    }
  })
  phoneNumber.addEventListener('input' ,(event) => {
    if (phoneNumber.validity.patternMismatch) {
      phoneNumber_error.textContent = "please enter valid 10 digit phone number ";
    } else {
      phoneNumber_error.textContent = '';
    }
  })
  password.addEventListener('input', (event) => {
    if (password.validity.patternMismatch) {
      password_error.textContent = "please enter at least 8 character"
                                    + "1 capital letter"
                                    + "1 number"
                                    + "1 special character(@,#,$..)";
    } else {
      password_error.textContent = '';
    }
  })
  confirm_password.addEventListener('input', (event)=> {
    if (password.value !== confirm_password.value) {
      confirm_password_error.textContent = "password do not match";
    } else {
      confirm_password_error.textContent = '';
    }
  })
}

errorMessage();