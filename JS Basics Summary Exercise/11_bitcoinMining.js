function solve(input){
let bitcoinCount=0;
let curDay=0;
let firstBitcoinDay=0;
let totalMoney=0;
for(let i=0;i<input.length;i++){
    let gold=input[i];
curDay++;
if(curDay%3==0){
    gold*=0.7;
}
let moneyFromGold=67.51*gold;
totalMoney+=moneyFromGold;
while(totalMoney>=11949.16){
    if(bitcoinCount===0){
        firstBitcoinDay=curDay;
    }
    bitcoinCount++;
    totalMoney-=11949.16;
}
}
console.log(`Bought bitcoins: ${bitcoinCount}`);
if(bitcoinCount>0){
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
}
console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124]);