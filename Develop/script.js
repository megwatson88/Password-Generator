// Assignment Code
var generateBtn = document.querySelector("#generate");

let specialEl = ['!', '@', '#', '$','%', '^','&','*', '(',')'];
let number = ['1','2','3','4','5','6','7','8','9','0'];
let alpha = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
space = [];

//add numeric variables. 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
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
  var hasLower = confirm('click ok to confirm');
  //var hadUpper =confirm() also do for the upper and lower 
  // var when i answer a prompt than my input should be calidated with one cha type sho
  var hasUpper = confirm('click to confirm');
  var hadSpecial = confirm('click to confirm');
};
//Write the code to diplay the actual password, using a function, 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  var options = passwordCriteria();
  //if statements with the .concat

  let passwordFinal = []


// create an empty arry of charters to be seen 
}

for () {
  let generatePassword i =1; i < 10; i++;
};
//random index 
//build a loop to create the pass word for loop for(var i=), i< varable i++
//use while to keep the going 
//break if var <= 0
//