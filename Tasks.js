// ✅ 1. Variable and Data Types

let name = "Prerna";           // String
const myAge = 20;             // Number
var isLearning = true;       // Boolean
let notDefined;             // Undefined
const emptyValue = null;   // Null

console.log("Type of name:", typeof name);               // String
console.log("Type of myAge:", typeof myAge);             // Number
console.log("Type of isLearning:", typeof isLearning);     // boolean
console.log("Type of notDefined:", typeof notDefined);    // Undefined
console.log("Type of emptyValue:", typeof emptyValue);   // null

// 2. Hoisting Demo ------

console.log("Value of a:", a); // Outputs: undefined (due to hoisting)
var a = "5";

// console.log("value of b:",b); // It will result into ReferenceError: Cannot access 'b' before initialization
let b = "10";


// 3. User Greeting (Conditionals)

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

if (userAge < 18) {
    alert(`Hey ${userName}, you’re a teen!`);
} else if (userAge >= 18 && userAge <= 60) {
    alert(`Welcome ${userName}, you’re an adult!`);
} else {
    alert(`Hello ${userName}, you’re a senior citizen!`);
}

// 4. Looping Numbers

// for loop to print numbers from 1 to 10
console.log("for loop (1 to 10):");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while loop to print even numbers from 2 to 20
console.log("while loop (Even numbers 2 to 20):");
let even = 2;
while (even <= 20) {
    console.log(even);
    even += 2;
}

// do...while loop to print numbers from 10 down to 1
console.log("do...while loop (10 to 1):");
let countdown = 10;
do {
    console.log(countdown);
    countdown--;
} while (countdown >= 1);

// 5. Functions

// Function declaration
function add(a, b) {
    return a + b;
}
console.log("Sum of 5 and 3:", add(5, 3));

// Function expression
const square = function (num) {
    return num * num;
};
console.log("Square of 4:", square(4));

// Arrow function
const greetUser = (name) => {
    return `Hello, ${name}!`;
};
console.log(greetUser("Prerna"));


// 6. Callback Practice

//CallBack Function
function processNumber(num, callback) {
    callback(num);
}
//Calls the function with the number
processNumber(5, function(n) {
    console.log("Double is", n * 2);
});
