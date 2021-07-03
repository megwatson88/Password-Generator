// Assignment Code
let enter;
let confirmNumber;
let confirmUppercase;
let confirmLowercase;
let confirmSpecial;

var generateBtn = document.querySelector("#generate");
// Special Characters
let specialEl = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
// Number charaters 
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lowercase characters 
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
space = [];
let choices
let toUpper = function (x) {
  return x.toUpperCase();
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
function passwordCriteria() {
  let length = parseInt(prompt('Choose a length for your password, 8-128 characters.'))
  if (length < 8) {
    alert('Password must be at least 8 characters long')
    return length;
  };
  if (length > 128) {
    alert('Password must be less than 128 characters long.');
    return length;
  };
  var hasLower = confirm('Will this use Lowercase?');
  //var hadUpper =confirm() also do for the upper and lower 
  // var when i answer a prompt than my input should be calidated with one cha type sho
  var hasUpper = confirm('Will this use Uppercase letters?');
  var hasSpecial = confirm('Will this use Speical Characters?');
  var hasNumber = confirm('Will this use numbers?');
  if (!hasNumber && !hasUpper && !hasSpecial && !hasNumber) {
    choice = alert('You must choose a criteria!')
  };
  

  //Write the code to diplay the actual password, using a function, 
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  function generatePassword() {
    var options = passwordCriteria();
    //4 positive choices

  if (hasNumber && hasUpper && hasSpecial && hasNumber) {

    choice = character.concat(hasNumber, hasUpper, hasLower, specialEl);
  };
  // 3 positives choices
  if (hasNumber && hasSpecial && hasUpper) {
    choice = character.concat(hasNumber, hasSpecial, hasUpper)
  }
  else if (hasLower && hasNumber && hasSpecial) {
    choice = character.concat(hasLower, number, hasSpecial)
  }
  else if (hasUpper && hasLower && hasNumber) {
    choice .concat(hasUpper, hasLower, hasNumber);
  }
  else if (hasLower && hasSpecial && hasNumber) {
    choice .concat(hasLower, hasSpecial, hasNumber)
  };

    //if statements with the .concat

    let passwordFinal = []


    // create an empty arry of charters to be seen 
  };


  //let generatePassword i =1; i < 10; i++;

  //random index 
  //build a loop to create the pass word for loop for(var i=), i< varable i++
 
  //break if var <= 0
  //
};