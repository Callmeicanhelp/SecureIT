// Assignment code here
var uppercase=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowercase=["abcdefghijklmnopqrstuvwxyz"]
var numbers=["1234567890"]
var specChars=["?.()!@#$%^&*"]



function newPass() {

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

