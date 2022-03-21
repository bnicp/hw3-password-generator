// char set - http://www.net-comber.com/charset.html


// Assignment Code -- PROVIDED BY TA
var generateBtn = document.querySelector("#generate");

// assigning variables
var length = document.querySelector('#numCharacters');
var lowercase = document.querySelector('#incLowercase');
var uppercase = document.querySelector('#incUppercase');
var numbers = document.querySelector('#incNumbers');
var symbols = document.querySelector('#incSymbols');
var form = document.querySelector('#passwordForm');

//function to generate password
function generatePassword() {

}

// Write password to the #password input -- PROVIDED BY TA
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//next thing that needs to be done

  


// Add event listener to generate button -- PROVIDED BY TA
generateBtn.addEventListener("click", writePassword);




// generator functions
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	return +String.fromCharCode(Math.floor(Math.random() * ) + );
	return symbols[Math.floor(Math.random() * symbols.length)];
}

