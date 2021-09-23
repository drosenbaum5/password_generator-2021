const specialCharaters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let characterSet = [];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
};

promptLength = () => {
  let passwordLength = parseInt(prompt("Enter the length of your password"));
  return passwordLength;
};

generatePassword = () => {
  let passwordLength = promptLength();
  if (Number.isNaN(passwordLength) && passwordLength < 8 && passwordLength <= 128) {
    console.log("Please enter a numerical value between 8 and 128");
    alert("Please enter a numerical value");
    generatePassword();
  }

  // if (Number.isNaN(passwordLength)) {
  //   console.log("Please enter a numerical value between 8 and 128");
  //   alert("Please enter a numerical value");
  //   generatePassword();
  // }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
