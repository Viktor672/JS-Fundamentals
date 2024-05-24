function solve(num){
let sum=0;
let isAmazing="False";
let numString=String(num);
for(let i=0;i<numString.length;i++){
    sum+=Number(numString[i]);
}
let sumString=String(sum);
for(let i=0;i<sumString.length;i++){
    if(sumString[i]==='9'){
        isAmazing="True";
        break;
    }
}
if(isAmazing){
    console.log(`${num} Amazing? ${isAmazing}`);
}
else{
    console.log(`${num} Amazing? ${isAmazing}`);
}
}
solve(999);