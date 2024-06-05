function solve(arr) {
    let longestSequence = [];
    let curSequence = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === curSequence[0]) {
            curSequence.push(arr[i]);
            if (curSequence.length > longestSequence.length) {
                longestSequence = curSequence;
            }
        }
        else {
            curSequence=[];
            curSequence.push(arr[i]);
        }
    }
    console.log(longestSequence.join(" "));
}
solve([1, 1, 1, 2, 3, 1, 3, 3]);