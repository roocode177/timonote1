function signup(){

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const password = document.getElementById("password").value;

// name validation
if(name === ""){
alert("Enter name");
return;
}

// email validation
if(!email.endsWith("@gmail.com")){
alert("Email must end with @gmail.com");
return;
}

// phone validation (10 digits only)
if(phone.length !== 10 || isNaN(phone)){
alert("Phone must be 10 digits");
return;
}

// password validation (8 char, number, symbol)
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

if(!passwordPattern.test(password)){
alert("Password must be 8 characters with number & symbol");
return;
}

alert("Signup success");
window.location.href="login.html";

}