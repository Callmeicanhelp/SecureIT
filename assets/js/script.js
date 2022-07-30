function generatePassword() {
    var possiblePw="";
  
    var pwLength = window.prompt("How long do you want your generated password to be? (Must be between 8 and 128 characters)");
  
    while (pwLength < 8 || pwLength > 128 || !Number.isInteger(Number(pwLength))) {
        pwLength = window.prompt ("Password must be between 8 and 128 characters!")
    }
  
    var upper = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    var lower = "abcdefghijklmnopqrstuvxyz";
    var numbers = "0123456789";
    var specials = "!@#$%&*()+?";
  
    var allowUpper = window.confirm("Do you want uppercase letters is your password?")
    var allowLower = window.confirm("Do you want lowercase letters in your password?")
    var allowNumber = window.confirm("Do you want numbers in your password?")
    var allowSpecial = window.confirm("Do you want special characters in your password?")
  
      if (allowUpper===true) {
        possiblePw = possiblePw + upper;
      }
  
      if (allowLower===true) {
        possiblePw = possiblePw + lower;
      }
  
      if (allowNumber===true) {
        possiblePw = possiblePw + numbers;
      }
  
      if (allowSpecial===true) {
        possiblePw = possiblePw + specials;
      }
  
      var result = ""
  
      if (possiblePw === "") {
        return "You must have some chracters in your password, please try again";
      }
  
      possiblePw = possiblePw.split('')
  
      for ( var i=0; i< pwLength; i++ ) {
        result=
          result + 
          possiblePw[Math.floor(Math.random() * possiblePw.length)];
      }
  
      return result;
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