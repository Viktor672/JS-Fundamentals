function solve(num,precision){
if(precision>15){
    precision=15;
}
let number=num.toFixed(precision);
let finalNumber=parseFloat(number);
console.log(finalNumber);
}
solve(3.14159265358979323846,2);
solve(10.5,3);