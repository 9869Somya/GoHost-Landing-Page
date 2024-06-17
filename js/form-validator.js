function validate(e) {
  let name = document.querySelector("#name").value;
  let dob = document.querySelector("#dob").value;
  let country = document.querySelector("#country").value;
  let mobile = document.querySelector("#mobile").value;
  let email = document.querySelector("#email").value;
  let address = document.querySelector("#address").value;
  let password = document.querySelector("#password").value;
  let password2 = document.querySelector("#password2").value;

  let gender = document.querySelector("input[name='gender']:checked");
  let iagree = document.querySelector("input[name='iagree']:checked");

  let error = false;

  if (name === "" || name === null) {
    document.querySelector("#nameError").innerHTML = "Please enter your name";
    document.querySelector("#name").style.border = "1px solid red";
    error = true;
  } else {
    document.querySelector("#nameError").innerHTML = "";
    document.querySelector("#name").style.border = "1px solid black";
  }

  let dobPattern = /[0-9]+/;
  if (dob === "" || dob === null) {
    document.querySelector("#dobError").innerHTML =
      "Please enter your date of birth";
    document.querySelector("#dob").style.border = "1px solid red";
    error = true;
  } else if (!dob.match(dobPattern)) {
    document.querySelector("#dobError").innerHTML =
      "Please enter valid date of birth";
    document.querySelector("#dob").style.border = "1px solid red";
    error = true;
  } else if (dob < 7 || dob > 70) {
    document.querySelector("#dobError").innerHTML = "Not Eligible";
    document.querySelector("#dob").style.border = "1px solid red";
    error = true;
  } else {
    document.querySelector("#dobError").innerHTML = "";
    document.querySelector("#dob").style.border = "1px solid black";
  }

  if (!gender) {
    document.querySelector("#genderError").innerHTML =
      "Please select your gender";
    error = true;
  } else {
    document.querySelector("#genderError").innerHTML = "";
  }

  if (country === "" || country === null) {
    document.querySelector("#countryError").innerHTML =
      "Please enter your name";
    document.querySelector("#country").style.border = "1px solid red";
    error = true;
  } else {
    document.querySelector("#countryError").innerHTML = "";
    document.querySelector("#country").style.border = "1px solid black";
  }

  if (mobile === "" || mobile === null) {
    document.querySelector("#mobileError").innerHTML =
      "Please enter your mobile number";
    document.querySelector("#mobile").style.border = "1px solid red";
    error = true;
  } else if (mobile.length != 10 || isNaN(mobile)) {
    document.querySelector("#mobileError").innerHTML =
      "Please enter your valid mobile number";
    error = true;
  } else {
    document.querySelector("#mobileError").innerHTML = "";
    document.querySelector("#mobile").style.border = "1px solid black";
  }

  let emailPattern = /^[a-z]+[a-z0-9\._]{3,}@[a-z]{3,10}\.[a-z\.]{2,8}$/;
  if (email === "" || email === null) {
    document.querySelector("#emailError").innerHTML = "Please enter your email";
    document.querySelector("#email").style.border = "1px solid red";
    error = true;
  } else if (!email.match(emailPattern)) {
    document.querySelector("#emailError").innerHTML =
      "Please enter your valid email";
    error = true;
  } else {
    document.querySelector("#emailError").innerHTML = "";
    document.querySelector("#email").style.border = "1px solid black";
  }
  if (address === "" || address === "Enter address" || address === null) {
    document.querySelector("#addressError").innerHTML =
      "Please enter your address";
    document.querySelector("#address").style.border = "1px solid red";
    error = true;
  } else {
    document.querySelector("#addressError").innerHTML = "";
    document.querySelector("#address").style.border = "1px solid black";
  }

  let validPassword = true;
  let passError = "";
  if (!password.match(/[a-z]/)) {
    passError += "<br/>Password should contain atleast one lowercase alphabet";
    validPassword = false;
  }
  if (!password.match(/[A-Z]/)) {
    passError += "<br/>Password should contain atleast one uppercase alphabet";
    validPassword = false;
  }
  if (!password.match(/[0-9]/)) {
    passError += "<br/>Password should contain atleast one number";
    validPassword = false;
  }
  if (!password.match(/[!@#$%^&*_]/)) {
    passError += "<br/>Password should contain atleast special character";
    validPassword = false;
  }
  if (password.length < 8 || password.length > 16) {
    passError += "<br/>Password must be 8-16 char long";
    validPassword = false;
  }
  if (!validPassword) {
    document.querySelector("#passwordError").innerHTML = passError;
    error = true;
  } else {
    document.querySelector("#passwordError").innerHTML = "";
  }

  if (password2 === "" || password2 === null) {
    document.querySelector("#password2Error").innerHTML =
      "Confirm passsword is required";
    document.querySelector("#password2").style.border = "1px solid red";
    error = true;
  } else if (password !== password) {
    document.querySelector("#password2Error").innerHTML =
      "Password doesn't match";
  } else {
    document.querySelector("#password2Error").innerHTML = "";
    document.querySelector("#password2").style.border = "1px solid black";
  }

  if (!iagree) {
    document.querySelector("#iagreeError").innerHTML =
      "You must agree to the terms and conditions";
    error = true;
  } else {
    document.querySelector("#iagreeError").innerHTML = "";
  }
  if (error) {
    e.preventDefault(); //preventDefault behaviuor of a event
  }
}
