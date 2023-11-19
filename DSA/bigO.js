/*
    1. Counting arithmatic operation we can know Big O notation
    2. Best Big O notaiton O(1)
    3. If artihmatic operation dont run nth time it will be O(1)
    4. Otherwise it will be O(n). Such as loop depends on n

*/

//   O(1) 
function addUpTo(n) {
    return n * (n+1)/2
}                               
console.log(addUpTo(10000));

