

var prompt = require("prompt-sync")();
let n1 = parseInt(prompt("Enter your first number : "));
let n2 = parseInt(prompt("Enter your second number : "));
let operators = prompt("Enter operators (+ , - , * , /)  : ");
if(operators == "+"){
    console.log(`The answer of ${n1} ${operators} ${n2}  = ${n1 + n2}`);
 }
else if(operators == "-"){
    console.log(`The answer of ${n1} ${operators} ${n2}  = ${n1 - n2}`);
 }
else if(operators == "*"){
    console.log(`The answer of ${n1} ${operators} ${n2}  = ${n1 * n2}`);
 }
else if(operators == "/"){
    console.log(`The answer of ${n1} ${operators} ${n2}  = ${n1 / n2}`);
 }
else{
    console.log("plss enter correct operators")
}
export {};