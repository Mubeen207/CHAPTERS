// let num1 = 10;
// let num2 = 15;

// let sum = num1 + num2;

// let result = document.getElementById("result");
// result.innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
//-----------------------------------------------------------------------------

// let num1 = 10;
// let num2 = 5;

// let sum = num1 + num2;
// let sub = num1 - num2;
// let mul = num1 * num2;
// let div = num1 / num2;
// let mod = num1 % num2;

// let result = document.getElementById("result");
// result.innerHTML =
//   "Sum: " +
//   sum +
//   "<br>" +
//   "Subtraction: " +
//   sub +
//   "<br>" +
//   "Multiplication: " +
//   mul +
//   "<br>" +
//   "Division: " +
//   div +
//   "<br>" +
//   "Modulus: " +
//   mod;
//--------------------------------------------------------------------------------------------

// let number;

// let result = "Value after variable declaration is: " + number + "<br>";
// number = 5;

// result = result + "Initial value " + number + "<br>";

// number++;

// result = result + "Value after increment is " + number + "<br>";

// number = number + 7;

// result = result + "Value after addition 7 is " + number + "<br>";

// number--;

// result = result + "Value after decrement is " + number + "<br>";

// let remainder = number % 3;

// result = result + "The remainder 3 is " + remainder;

// let result1 = document.getElementById("result");
// result1.innerHTML = result;
//-------------------------------------------------------------------------------

// let ticketPrice = 600;
// let numberOfTickets = 5;
// let totalCost = ticketPrice * numberOfTickets;
// let result = document.getElementById("result");
// result.innerHTML =
//   "Total cost to buy " +
//   numberOfTickets +
//   " tickets to a movie is " +
//   totalCost +
//   " PKR.";
//-------------------------------------------------------------------------------

// let number = 5;
// let result = "";

// for (let i = 1; i <= 10; i++) {
//   result = result + number + " x " + i + " = " + number * i + "<br>";
// }
// let result1 = document.getElementById("result");
// result1.innerHTML = result;
//---------------------------------------------------------------------------------
// let celsius = 30;

// let fahrenheitFromCelsius = (celsius * 9) / 5 + 32;

// let fahrenheit = 86;

// let celsiusFromFahrenheit = ((fahrenheit - 32) * 5) / 9;

// let output =
//   celsius +
//   "°C is " +
//   fahrenheitFromCelsius +
//   "°F<br>" +
//   fahrenheit +
//   "°F is " +
//   celsiusFromFahrenheit +
//   "°C";

// let result1 = document.getElementById("result");
// result1.innerHTML = output;
//--------------------------------------------------------------------------------
let priceItem1 = 650;

let priceItem2 = 100;

let qtyItem1 = 3;

let qtyItem2 = 7;

let shippingCharges = 100;

let totalCost = priceItem1 * qtyItem1 + priceItem2 * qtyItem2 + shippingCharges;

let result = "";
result += "Price of item 1 is " + priceItem1 + "<br>";
result += "Quantity of item 1 is " + qtyItem1 + "<br>";
result += "Price of item 2 is " + priceItem2 + "<br>";
result += "Quantity of item 2 is " + qtyItem2 + "<br>";
result += "Shipping Charges " + shippingCharges + "<br><br>";
result += "Total cost of your order is " + totalCost;

let result1 = document.getElementById("result");
result1.innerHTML = result;
