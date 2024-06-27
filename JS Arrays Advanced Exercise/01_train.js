function solve(arr) {
    let wagon = arr.shift().split(" ");
    let wagonNum = wagon.map(x => Number(x));
    let maxCapacity = Number(arr.shift());
    for (let i = 0; i < arr.length; i++) {
        let curEl = arr[i];
        if (curEl.includes("Add")) {
            let tokens = curEl.split(" ");
            let passangers = Number(tokens[1]);
            wagonNum.push(passangers);
        }
        else {
            let passangers = Number(arr[i]);
            for (let j = 0; j < wagonNum.length; j++) {
                if (wagonNum[j] + passangers <= maxCapacity) {
                    wagonNum[j] += passangers;
                    break;
                }
                else {
                    continue;
                }
            }
        }
    }
    console.log(wagonNum.join(" "));
}
solve(['0 0 0 10 2 4',

    '10',

    'Add 10',

    '10',

    '10',

    '10',

    '8',

    '6']);