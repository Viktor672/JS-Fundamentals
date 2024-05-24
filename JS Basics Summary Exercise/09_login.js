function solve(input){
let password="";
incorrectTries=0;
    let index=0;
    index++;
let curRow=input[index]
for(let i=input[0].length-1;i>=0;i--){
    password+=input[0].charAt(i);
}
while(curRow!=password){
    incorrectTries++;
    if(incorrectTries>=4){
        console.log(`User ${input[0]} blocked!`);
        return;
    }
    console.log("Incorrect password. Try again.");
    index++;
    curRow=input[index];
}
console.log(`User ${input[0]} logged in.`);
}
solve(['momo','omom']);