// 1️⃣ Function to add two numbers
function add(a, b) {
  return a + b;
}
console.log("Addition:", add(5, 3)); // Output: 8


// 2️⃣ Function expression to multiply two numbers
const multiply = function(a, b) {
  return a * b;
};
console.log("Multiplication:", multiply(5, 3)); // Output: 15


// 3️⃣ Arrow function to subtract two numbers
const subtract = (a, b) => a - b;
console.log("Subtraction:", subtract(5, 3)); // Output: 2


// 4️⃣ Function with parameters and return value
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("BM")); // Output: Hello, BM!


// 5️⃣ Global vs Local Scope
let globalVar = "I’m global"; // Global scope

function scopeExample() {
  let localVar = "I’m local"; // Local scope
  console.log(globalVar); // ✅ Accessible
  console.log(localVar);  // ✅ Accessible inside function
}

scopeExample();
// console.log(localVar); ❌ Error - localVar not accessible outside
console.log(globalVar); // ✅ Accessible
