let dom = document.getElementById("write");
// console.log(dom);
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;

dom.innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;

//-------------------------------------------------------------------------

  let num1 = 20;
  let num2 = 5;

 
  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;
  let quotient = num1 / num2;
  let remainder = num1 % num2;

  
  let outputDiv = document.getElementById("output");

  outputDiv.innerHTML  = "Sum of " + num1 + " and " + num2 + " is " + sum + "<br>";
  outputDiv.innerHTML += "Difference of " + num1 + " and " + num2 + " is " + difference + "<br>";
  outputDiv.innerHTML += "Product of " + num1 + " and " + num2 + " is " + product + "<br>";
  outputDiv.innerHTML += "Quotient of " + num1 + " divided by " + num2 + " is " + quotient + "<br>";
  outputDiv.innerHTML += "Remainder when " + num1 + " is divided by " + num2 + " is " + remainder + "<br>";