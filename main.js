"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt("Enter your first number : "));
var n2 = parseInt(prompt("Enter your second number : "));
var operators = prompt("Enter operators (+ , - , * , /)  : ");
if (operators == "+") {
    console.log("The answer of ".concat(n1, " ").concat(operators, " ").concat(n2, "  = ").concat(n1 + n2));
}
else if (operators == "-") {
    console.log("The answer of ".concat(n1, " ").concat(operators, " ").concat(n2, "  = ").concat(n1 - n2));
}
else if (operators == "*") {
    console.log("The answer of ".concat(n1, " ").concat(operators, " ").concat(n2, "  = ").concat(n1 * n2));
}
else if (operators == "/") {
    console.log("The answer of ".concat(n1, " ").concat(operators, " ").concat(n2, "  = ").concat(n1 / n2));
}
else {
    console.log("plss enter correct operators");
}
