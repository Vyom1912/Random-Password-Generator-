const passwordBox = document.getElementById("password");
const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-={}[]|:;'<>,.?/";

const allChar = upperCase + lowerCase + number + symbol;
let password = "";

function createPassword() {
  password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * upperCase.length)];

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  if (password.length == 0) {
    alert("First Generate Password.");
  } else {
    alert("password is copied");
  }
}
