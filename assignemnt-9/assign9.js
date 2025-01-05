//1:  Function to declare variables using let, const, and var
function declareVariables() {
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";

    console.log(varVariable); // Function scope
    console.log(letVariable); // Block scope
    console.log(constVariable); // Block scope
}

// 2 : Array of fruits
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Function to return the second fruit in the array
function getSecondFruit(arr) {
    return arr[1];
}

// 3: Function to add and remove an element from an array
function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to return a new array with each number squared
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

// Function to filter out even numbers and return odd numbers
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Object person with properties
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};

// Function to log a greeting message using person properties
function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and I work as a ${obj.occupation}.`);
}

// Function to calculate the area of a rectangle
function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}

// Function to return an array of the object's keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// Function to merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// Function to calculate the sum of all numbers in an array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
