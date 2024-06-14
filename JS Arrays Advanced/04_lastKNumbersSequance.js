function solve(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let newArr = arr.slice(-k);
        let sum = 0;
        for (let j = 0; j < newArr.length; j++) {
            let num = newArr[j]
            sum += num;
        }
        arr.push(sum)
    }
    console.log(arr.join(" "));
}
solve(6, 3);