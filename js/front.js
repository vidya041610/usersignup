const form = document.getElementById('form');
const username = document.getElementById('username');
const contactNumber = document.getElementById('contactNumber');
const email = document.getElementById('email');
const city = document.getElementById('city');
const state = document.getElementById('state');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}   
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (username.value === '') {
        showError(username, 'Username is required');
    } else if (username.value.length <6) {
        showError(username, 'Username must be 6characters or more');
    } else {
        showSuccess(username);
    }
    if (contactNumber.value === '') {
        showError(contactNumber, 'Contact number is required');
    } else if (contactNumber.value.length !== 10) {
        showError(contactNumber, 'Contact number must be 10 digits');
    } else {
        showSuccess(contactNumber);
    }
  if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
    } else {
        showSuccess(email);
    }

     if (city.value === '') {
        showError(city, 'city is required');
    } else {
        showSuccess(city);
    }
     if (state.value === '') {
        showError(state, 'State is required');
    } else {
        showSuccess(state);
    }

});
