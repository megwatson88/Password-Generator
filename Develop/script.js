// Assignment Code
var generateBtn = document.querySelector("#generate");

let specialEl = ['!', '@', '#', '$','%', '^','&','*', '(',')'];
let lowerCase = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'U', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
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
};
//Write the code to diplay the actual password, using a function, 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  var options = passwordCriteria();

// create an empty arry of charters to be seen 
}

//random index 
//build a loop to create the pass word for loop for(var i=), i< varable i++
//use while to keep the going 
//break if var <= 0
//