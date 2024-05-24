function solve(num1,num2,num3){
let max="";
let min="";
let average="";
if(num1>num2 && num1>num3){
    if(num2>num3){
        average=num2;
        min=num3;
    }
    else{
        average=num3;
        min=num2;
    }
    max=num1;
}
if(num2>num1 && num2>num3){
    if(num1>num3){
        average=num1;
        min=num3;
    }
    else{
        average=num3;
        min=num1;
    }
    max=num2;
}
if(num3>num1 && num3>num2){
    if(num1>num2){
        average=num1;
        min=num2;
    }
    else{
        average=num2;
        min=num1;
    }
    max=num3;
}
console.log(max);
console.log(average);
console.log(min);
}
solve(-2,

    1,
    
    3);