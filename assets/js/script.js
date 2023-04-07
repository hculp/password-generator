// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts user input for password
// password always greater than or equal 8 characters and less than or equal 128 characters
// password types options include lowercase, uppercase, numeric, and/or special characters
// password selections are validated and requires at least one selection type upon prompt completion
var generatePassword = function() {
  var cases = [];
  var passlength = 0;
  var setCharacters= "";
  let alphabetLowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  let alphabetUppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericCharacters = "0123456789";
  let specialCharacters = ` !\"#$%&\'()*+,-./:;<=>?@[\\]^_\`\{\|\}\~`;

  // Prompts user for password length until continue to ask user for password length until proper input (8<=x<=128, int).
  // Will alert user if their inputs do no satisfy the critera.
  while ( passlength < 8 || passlength > 128 || isNaN(passlength) == true || passlength === false) {
    // Default input for password length is 8 unless the user changes input.
    passlength = parseInt(prompt("Enter a number for you password length. Can be 8 to 128 characters long.",8));
    if (passlength < 8) {
      alert("Given password length is too small. Input value of at least 8.");
    } else if (passlength > 128) {
      alert("Given password length is too big. Input value no greater than 128.");
    } else if (isNaN(passlength) == true || passlength === false) {
      alert("Password length must be numeric value!");
    }
  }

  // Gets user inputs and stores in array(cases). Coerces those inputs to lowercase string values or undefined.
  // Inputs marked 'yes' add associated characters to array(setCharacters) that will be used to generate password
  var lowcase = prompt("Do you want lowercase letters included in the set of characters used to generate your password?","Yes");
  cases.push(lowcase?.toLowerCase());
  if (lowcase?.toLowerCase() === 'yes') {
    setCharacters += alphabetLowercaseCharacters;
  }
  var upcase = prompt("Do you want uppercase letters included in the set of characters used to generate your password?", "Yes");
  cases.push(upcase?.toLowerCase());
  if (upcase?.toLowerCase() === 'yes') {
    setCharacters += alphabetUppercaseCharacters;
  }
  var numcase = prompt("Do you want numeric characters included in the set of characters used to generate your password?", "Yes");
  cases.push(numcase?.toLowerCase());
  if (numcase?.toLowerCase() === 'yes') {
    setCharacters += numericCharacters;
  }
  var specialcase = prompt("Do you want special characters included in the set of characters used to generate your password?", "Yes");
  cases.push(specialcase?.toLowerCase());
  if (specialcase?.toLowerCase() === 'yes') {
    setCharacters += specialCharacters;
  }

  // function to test if all elements in the array are undefined (user clicked cancel) or 'no' input
  const noinput = (Element) => (Element) !== undefined && (Element) !== 'no' ;

  // function to test if any elements in the array do not fit proper input format
  const badinput = (Element) => (Element) === 'yes' || (Element) === 'no' || (Element) === undefined;

  // function to test if any elements in the array are 'no'
  const allno = (Element) => (Element) === 'no';

  // Checks if user did not select any password criteria for all prompts or improper inputs on any prompt.
  // If conditions are not met, restarts prompts.
  if (cases.some(noinput) == false || cases.every(allno) == true) {
    alert("You must select at least one condition for the password in order to be generated.")
    generatePassword();
  } else if (cases.every(badinput) == false) {
    alert("Your inputs must be in 'yes' or 'no' formats. Please reselect your password criteria.")
    generatePassword();
  } 
  
  // Loops the number of times as user input password length to generate each random character from the user approved characters (setCharacters).
  var newpass = '';
  for (var i = 0; i < passlength; i++) {
    var generate = Math.floor(Math.random() * setCharacters.length);
    newpass += `${setCharacters.charAt(generate)}`;

  }
  console.log(newpass);
  console.log(newpass.length);
  return newpass;
};
