// let num1 = 10;
// let num2 = 15;

// let sum = num1 + num2;

// let result = document.getElementById("result");
// result.innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
//-----------------------------------------------------------------------------

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

let result = document.getElementById("result");
result.innerHTML =
  "Sum: " +
  sum +
  "<br>" +
  "Subtraction: " +
  sub +
  "<br>" +
  "Multiplication: " +
  mul +
  "<br>" +
  "Division: " +
  div +
  "<br>" +
  "Modulus: " +
  mod;
