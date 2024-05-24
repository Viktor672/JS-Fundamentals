function solve(num){
let arr=[10,7,6,3,2];
for(let i=0;i<arr.length;i++){
    let number=arr[i];
    if(num%number==0){
        console.log(`The number is divisible by ${number}`);
        return;
    }
}
console.log("Not divisible");
}
solve(30);
solve(1643);
solve(15);
solve(12);