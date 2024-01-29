// validation.js

document.getElementById('validationForm').addEventListener('submit', function(event) {
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
  
    if (!validateUsername(usernameInput.value)) {
      setInvalid(usernameInput);
      event.preventDefault();
    } else {
      setValid(usernameInput);
    }
  
    if (!validateEmail(emailInput.value)) {
      setInvalid(emailInput);
      event.preventDefault();
    } else {
      setValid(emailInput);
    }
  
    if (!validatePassword(passwordInput.value)) {
      setInvalid(passwordInput);
      event.preventDefault();
    } else {
      setValid(passwordInput);
    }
  });
  
  function validateUsername(username) {
    return username.length > 0;
  }
  
  function validateEmail(email) {
    // Simple email validation for demonstration purposes
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    return password.length >= 6;
  }
  
  function setInvalid(element) {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
  }
  
  function setValid(element) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
  }
  