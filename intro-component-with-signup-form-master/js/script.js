let firstName = document.getElementById('firstName');
let textFNError = document.getElementById('fn-error-text');
let submitBtn = document.getElementById('submitBtn');
let lastName = document.getElementById('lastName');
let textLNError = document.getElementById('ln-error-text');
let emailInput = document.getElementById('email');
let textEmailError = document.getElementById('email-error-text');
let passInput = document.getElementById('pass');
let textPassError = document.getElementById('pass-error-text');
let divInputForm = document.getElementById('input-form');


submitBtn.addEventListener('click', ()=>{
    if (!firstName.value) {
        firstName.classList.add("error-icon");
        textFNError.innerHTML = 'First Name cannot be empty';
    }
    if (!lastName.value) {
        lastName.classList.add("error-icon");
        textLNError.innerHTML = 'Last Name cannot be empty';
    }
    if (!emailInput.value || emailInput.value.match(/@/) == null) {
        emailInput.classList.add("error-icon");
        textEmailError.innerHTML = 'Enter email is not correct';
    }
    if(passInput.value.length < 8) {
        passInput.classList.add("error-icon");
        textPassError.innerHTML = 'Password must have least 8 characters';
    }
})

divInputForm.addEventListener('click', (event)=> {
    if(event.target.nodeName == 'INPUT' && event.target != submitBtn ){
        event.target.classList.remove("error-icon");
        event.target.nextElementSibling.innerHTML = '';
    }
})
