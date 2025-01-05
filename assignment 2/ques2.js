let a = parseInt(prompt("enter first number"));
let b= parseInt(prompt("enter second number"));
let operator = prompt("enter operation");
switch (operator) {
  case '+':
    console.log(a+b);
    break;
  case '-':
    console.log(a-b);
    break;
  case '*':
    console.log(a*b);
    break;
  case '/':
    console.log(a/b);
    break;
  
  default:
    console.log("wrong input");
}