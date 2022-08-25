// Variables declaring characters availabe for use in a password.
var uppercase=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase=["abcdefghijklmnopqrstuvwxyz"];
var numbers=["1234567890"];
var specChars=["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

// Function to take user input and generate a password.
function generatePassword() {
  //Prompt user for length of password.
  var passLength = window.prompt("Choose a password length between 8 and 128 characters.");

  //Verify that the user input is a number and length is between 8 and 128 characters.
  while (!Number.isInteger(Number(passLength)) || passLength > 128 || passLength < 8) {
    (passLength = window.prompt("Try again. Choose a password length between 8 and 128 characters."))
  };

  //This variable will declare which characters are used.
  var usedChars = "";

  //Confirms if user wants uppercase letters in the password and adds them to usedChars if true.
  var useUppercase = window.confirm("Will your password use uppercase letters?")
  if (useUppercase === true) { usedChars = usedChars + uppercase};

  //Confirms if user wants lowercase letters in the password and adds them to usedChars if true.
  var useLowercase = window.confirm("Will your password use lowercase letters?")
  if (useLowercase === true) { usedChars = usedChars + lowercase};

  //Confirms if user wants numbers in the password and adds them to usedChars if true.
  var useNumbers = window.confirm("Will your password use numbers?")
  if (useNumbers === true) { usedChars = usedChars + numbers};

  //Confirms if user wants special characters in the password and adds them to usedChars if true.
  var useSpecChars = window.confirm("Will your password use special characters?")
  if (useSpecChars === true) { usedChars = usedChars + specChars};

  //Checks if password is empty string due to not including any characters when prompted.  If true, return to start.
  var newPassword = ""
  if (usedChars === "") {
    return "You must choose at least one option. Password cannot be blank. Please try again.";
  }
  usedChars = usedChars.split('')
  
  for ( var i=0; i< passLength; i++ ) {
    newPassword = newPassword + usedChars[Math.floor(Math.random() * usedChars.length)];
  }
  
  return newPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);