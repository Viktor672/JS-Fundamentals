function solve(num){
for(let i=1;i<=num;i++){
    let sum=0;
    let curNum=i;
    let isAmazing="False";
    while(curNum>0){
        sum+=curNum%10;
        curNum=Math.trunc(curNum/10);
    }
    if(sum==5 || sum==7 || sum==11){
        isAmazing="True";
    }
console.log(`${i} -> ${isAmazing}`);
}
}
solve(15);