// 1. Declare 3 variables in one statement
let a, b, c;

// 2. Declare 5 legal & 5 illegal variable names (comments for illegal)
// ✅ Legal variable names
let myName;
let $price;
let _value;
let name123;
let user_age;

// 3. Display rules in browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write(
  "<p>Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b>, and <b>_</b>.<br>For example: <code>$my_1stVariable</code></p>"
);
document.write(
  "<p>Variables must begin with a <b>letter</b>, <b>$</b>, or <b>_</b>.<br>For example: <code>$name</code>, <code>_name</code> or <code>name</code></p>"
);
document.write("<p>Variable names are case <b>sensitive</b></p>");
document.write("<p>Variable names should not be JS <b>keywords</b></p>");
