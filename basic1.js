// Basic Loop 
for (var i = 1; i <= 10; i++){
    console.log(i)
};

for (var i = 1; i <= 100; i += 2){
    console.log(i);
};

// Print the multiplication table with 7 
for (let i = 1; i <= 10; i++){
    let row = "7 *" + i + "=" + 7 * i;
    console.log(row)
};
// Print all the multiplication tables with numbers from 1 to 10
function printTable(n) {
    for (let i = 1; i <= 10; i++){
        let row = n + "*" + i + "=" + n * i;
        console.log(row)
    }
};
printTable(10)

// Calculate the sum of numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);

// Calculate 10!
var factorial = 1;
for (let i = 1; i <= 10; i++){
    factorial *= i
}
console.log(factorial)

// Calculate the sum of odd numbers greater than 10 and less than 30

let odd = 0;
for (let i = 11; i <=30; i+=2) {
    odd += i;
}
console.log(odd);
