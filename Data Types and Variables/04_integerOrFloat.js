function solve(num1,num2,num3) {
let sum=num1+num2+num3;
let isFloat=false;
let sumString=String(sum);
for(let i=0;i<sumString.length;i++){
  if(sumString[i]==="."){
isFloat=true;
  }
}
if(isFloat){
console.log(`${sum} - Float`);
}
else{
    console.log(`${sum} - Integer`);
}
}
solve(100, 200, 303);