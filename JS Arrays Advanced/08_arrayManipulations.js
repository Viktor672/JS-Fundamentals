function solve(arr) {
    let arrayNums = arr[0].split(" ").map((n) => Number(n));
    arr.shift();
    let commandArr = [];
    for (let i = 0; i < arr.length; i++) {
        commandArr = arr[i].split(" ");
        let command = commandArr[0];
        let num = Number(commandArr[1]);
        let index = Number(commandArr[2]);
        if (command === "Add") {
            arrayNums.push(num);
        }
        else if (command === "Remove") {
            if (arrayNums.includes(num)) {
                let indexOf = arrayNums.indexOf(num);
                arrayNums.splice(indexOf, 1);
            }
        }
        else if (command === "RemoveAt") {
            arrayNums.splice(num, 1);
        }
        else if (command === "Insert") {
            arrayNums.splice(index, 0, num);
        }
    }
    console.log(arrayNums.join(" "));
}
solve(['6 12 2 65 6 42',

    'Add 8',

    'Remove 12',

    'RemoveAt 3',

    'Insert 6 2']);