// Assignment Code
let enter;
let confirmNumber;
let confirmUppercase;
let confirmLowercase;
let confirmSpecial;

// Special Characters
specialEl = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
// Number charaters 
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lowercase characters 
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
space = [];
let choices;
let toUpper = function (x) {
  return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);

let generateBtn = document.querySelector("#generate");

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

    //4 positive choices with concat

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
      choice.concat(hasUpper, hasLower, hasNumber);
    }
    else if (hasLower && hasSpecial && hasNumber) {
      choice.concat(hasLower, hasSpecial, hasNumber)
    };
    // 2 positive choices 
    if (hasLower && hasNumber) {
      choice.concat(hasLower, hasUpper)
    }
    else if (hasLower && hasSpecial) {
      choice.concat(hasLower, hasSpecial)
    }
    else if (hasLower && hasNumber) {
      choice.concat(hasLower, hasNumber)
    }
    else if (hasUpper && hasNumber) {
      choice.concat(hasUpper, hasNumber)
    }
    else if (hasUpper && hasSpecial) {
      choice.concat(hasUpper, hasSpecial)
    }
    else if (hasNumber && hasSpecial) {
      choice.concat(hasNumber, hasSpecial)
    }
    else if (hasLower) {
      choice = hasLower
    }
    else if (hasUpper){
      choice = hasUpper
    }
    else if (hasNumber){
      choice = hasNumber
    }
    else if (hasSpecial){
      choice = hasSpecial
    }
    password = [];
  };
  for (var i = 0; i < enter; i++) {
    var pickChoices = choice[Math.floor(Math.random()* choice.length)];
    password.push(pickChoices)
  } 
  var ps = password.join('');
  UserInput(ps);
  return ps;
}
function UserInput(ps){
  document.getElementById('password').textContent = ps;
}
;

//Write the code to diplay the actual password, using a function, 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var options = passwordCriteria(password);
  let passwordFinal = [];
  

};
