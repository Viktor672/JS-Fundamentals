function solve(num){
let numString=String(num);
let sum=0;
for(let i=0;i<numString.length;i++){
    sum+=Number(numString[i]);
}
console.log(sum);
}
solve(97561);