function solve(num){
let lastDigit=num%10;
if(lastDigit<0){
    lastDigit=Math.abs(lastDigit);
}
let word="";
switch(lastDigit){
    case 0:word="zero";break;
    case 1:word="one";break;
    case 2:word="two";break;
    case 3:word="three";break;
    case 4:word="four";break;
    case 5:word="five";break;
    case 6:word="six";break;
    case 7:word="seven";break;
    case 8:word="eight";break;
    case 9:word="nine";break;
}
console.log(word);
}
solve(512);