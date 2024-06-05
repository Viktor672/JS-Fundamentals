function solve(arr) {
    let sumOldArr=0;
    let sumNewArr=0;
    for(let i=0;i<arr.length;i++){
        arr[i]=Number(arr[i]);
        sumOldArr+=arr[i];
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            arr[i]+=i;
            sumNewArr+=arr[i];
        }
        else{
            arr[i]-=i;
            sumNewArr+=arr[i];
        }
    }
    console.log(arr);
    console.log(sumOldArr);
    console.log(sumNewArr);
}
solve([5, 15, 23, 56, 35]);