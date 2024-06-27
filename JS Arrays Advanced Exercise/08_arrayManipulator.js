function solve(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let tokens = arr2[i].split(" ");
        let command = tokens.shift();
        if (command === "add") {
            let index = Number(tokens.shift());
            let element = Number(tokens.shift());
            arr1.splice(index, 0, element);
        }
        else if (command === "addMany") {
            let index = Number(tokens.shift());
            for (let j = 0; j < tokens.length; j++) {
                arr1.splice(index, 0, Number(tokens[j]));
                index++;
            }
        }
        else if (command === "contains") {
            let index = Number(tokens.shift());
            let indexOf = arr1.indexOf(index);
            console.log(indexOf);
        }
        else if (command === "remove") {
            let index = Number(tokens.shift());
            arr1.splice(index, 1);
        }
        else if (command === "shift") {
            let rotations = Number(tokens.shift());
            for (let j = 1; j <= rotations; j++) {
                let firstEl = arr1.shift();
                arr1.push(firstEl);
            }
        }
        else if (command === "sumPairs") {
            let pairedSumArr = [];
            for (let j = 0; j < arr1.length; j += 2) {
                if (arr1[j + 1] == undefined) {
                    pairedSumArr.push(arr1[j]);
                }
                else{
                    pairedSumArr.push(arr1[j] + arr1[j + 1]);
                }
            }
            arr1 = pairedSumArr;
        }
        else if (command === "print") {
            console.log(`[ ${arr1.join(", ")} ]`);
        }
    }
}
solve([1, 2, 4, 5, 6, 7],

    ['add 1 8', 'contains 1', 'contains 3', 'print']);