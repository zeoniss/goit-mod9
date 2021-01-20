"use strict";

// index.js
var validator = require("validator"); // const greeter = require("./greeter");
// greeter("Hello friends!");


var validateEmail = function validateEmail(email) {
  return validator.isEmail(email);
};

console.log("Is mango@mail.com a valid email?: ", validateEmail("mango@mail.com"));
console.log("Is Mangozedog.com a valid email?: ", validateEmail("Mangozedog.com"));