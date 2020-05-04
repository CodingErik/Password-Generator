// Array list of characters
let digitsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let capitalABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialArray = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
let passwordArr = [];
let personalPass = [];

// this is the event target for the generate password button 
var generateBtn = document.querySelector("#generate");
// this the display 
let passDisplay = document.getElementById("passwordDisplay");
// this is where the password will be displayed on the html
let passwordText = document.querySelector("#password");
let bg = document.body;


// this is the function called that generates the password
function generatePassword() {

  // declaring variables to confirm what is gonna be in the generated password
  let digitLength = prompt('Please choose a pasword length. Note: password must be at least 8 characters and no more than 128 characters');

  // overwritting user response to a integer for use by conditional
  digitLength = parseInt(digitLength);

  if (digitLength >= 8 && digitLength <= 128) {
    passwordArr = [];
    personalPass = [];

    // This is to confirm what is gonna be in here
    let capitalLetters = confirm('Please confirm if you want to include capital letters.');
    let lowercaseLetters = confirm('Please confirm if you want to include lowercase letters.');
    let specialSymbols = confirm('Please confirm if you want to include special characters.');
    let numeric = confirm('Please confirm if you want to include numeric.');

    if (capitalLetters === true) {
      passwordArr = passwordArr.concat(capitalABC);
    }
    if (lowercaseLetters === true) {
      passwordArr = passwordArr.concat(lowerABC);
    }
    if (specialSymbols === true) {
      passwordArr = passwordArr.concat(specialArray);
    }
    if (numeric === true) {
      passwordArr = passwordArr.concat(digitsArray);
    }
    //if none where confirmed then it will gives us this message
    if ((capitalLetters === false) && (lowercaseLetters === false) &&
      (specialSymbols === false) && (numeric === false)) {
      bg.style.backgroundColor = 'red';
      passDisplay.innerHTML = 'NO SELECTIONS WERE INCLUDED!';
    }
  } else {
    bg.style.backgroundColor = 'red';
    passDisplay.innerHTML = 'THE NUMERIC LENGTH IS NOT VALID!';
  }

  for (let i = 0; i < digitLength; i++) {
    // this will loop as many times as the length specified
    let randoIndx = Math.floor(Math.random() * passwordArr.length);
    personalPass.push(passwordArr[randoIndx]);

  };

  return personalPass.join(' ');
};

// Write the password to the HTML BOX     this is the id #password input
function writePassword() {
  var password = generatePassword();

   if (password != 0) { 
    passDisplay.innerHTML = "YOUR NEW PASSWORD IS BELOW!";
    bg.style.backgroundColor = generateRandomColor();
  }
  //running the generatePassword function
  passwordText.innerText = password;
  
}

// this is a random color generator
function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// This wait to trigger the write password functin when it is clicked
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
