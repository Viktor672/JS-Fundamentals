function cutAndReverse(string) {
    let halfLength = string.length / 2;
    let leftHalf = string.substring(0, halfLength);
    let rightHalf = string.substring(halfLength);
    let leftHalfArr = [];
    let rightHalfArr = [];
    for (let i = 0; i < leftHalf.length; i++) {
        leftHalfArr.unshift(leftHalf[i]);
    }
    for (let i = 0; i < rightHalf.length; i++) {
        rightHalfArr.unshift(rightHalf[i]);
    }
    console.log(leftHalfArr.join(""));
    console.log(rightHalfArr.join(""));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');