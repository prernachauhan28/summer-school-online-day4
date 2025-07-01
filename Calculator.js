let firstNum = prompt("Enter the first number:");
let operator = prompt("Enter operation (+, -, *, /):");
let secondNum = prompt("Enter the second number:");
let res;

switch (operator) {
    case "+":
        res = firstNum + secondNum;
        break;
    case "-":
        res = firstNum - secondNum;
        break;
    case "*":
        res = firstNum * secondNum;
        break;
    case "/":
        res = secondNum !== 0 ? firstNum / secondNum : "Cannot divide by zero";
        break;
    default:
        res = "Invalid operator!";
}

alert(`Result: ${res}`);
