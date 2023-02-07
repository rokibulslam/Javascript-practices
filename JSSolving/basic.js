// Basic Loop
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

for (var i = 1; i <= 100; i += 2) {
  console.log(i);
}

// Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
  let row = "7 *" + i + "=" + 7 * i;
  console.log(row);
}
// Print all the multiplication tables with numbers from 1 to 10
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    let row = n + "*" + i + "=" + n * i;
    console.log(row);
  }
}
printTable(10);

// Calculate the sum of numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Calculate 10!
var factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
console.log(factorial);

// Calculate the sum of odd numbers greater than 10 and less than 30

let odd = 0;
for (let i = 11; i <= 30; i += 2) {
  odd += i;
}
console.log(odd);

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

function celciousToFarenheit(n) {
  return n * 1.8 + 32;
}
const t = celciousToFarenheit(5);
console.log(t);

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

function farenheitToCelcious(n) {
  return (n - 32) / 1.8;
}
const c = farenheitToCelcious(60);
console.log(c.toFixed(2));

// Coding challenge #10: Calculate the sum of numbers in an array of numbers
function sumArray(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  console.log(sum);
  return sum;
}
const sumOfArray = sumArray([2, 3, 4, 5]);
console.log(sumOfArray);

// Coding challenge #11: Calculate the average of the numbers in an array of numbers
function average(array) {
  const length = array.length;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / length;
}
const av = average([2, 3, 4, 5, 6]);
console.log("average", av);
