// Assignment code here
var uppercase=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase=["abcdefghijklmnopqrstuvwxyz"];
var numbers=["1234567890"];
var specChars=["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];



function generatePassword() {
  var passLength = window.prompt("Choose a password length between 8 and 100 characters.");

  if (!Number.isInteger(Number(passLength)) || passLength > 100 || passLength < 8) {
    (passLength = window.prompt("Try again. Choose a password length between 8 and 100 characters."))
  };

  var useUppercase = window.confirm("Will your password use uppercase letters?")
  var useULowercase = window.confirm("Will your password use lowercase letters?")
  var useNumbers = window.confirm("Will your password use numbers?")
  var useSpecChars = window.confirm("Will your password use special characters?")



}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);