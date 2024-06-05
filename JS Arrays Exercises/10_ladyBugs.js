function solve(arr) {
    let fieldSize = Number(arr[0]);
    let ladybugsIndex = arr[1].split(" ");
    for (let i = 0; i < ladybugsIndex.length; i++) {
        ladybugsIndex[i] = Number(ladybugsIndex[i]);
    }
    let field = [];
    for (let i = 0; i < fieldSize; i++) {
        if (ladybugsIndex.includes(i)) {
            field[i] = 1;
        }
        else {
            field[i] = 0;
        }
    }
    for (let i = 2; i < arr.length; i++) {
        let order=arr[i].split(" ");
        let ladyIndex = Number(order[0]);
        let direction = order[1];
        let flyLength = Number(order[2]);
        if (!field[ladyIndex]) {
            continue;
        }
        field[ladyIndex] = 0;
        if (direction === "left") {
            let newLeftIndex = ladyIndex - flyLength;
            if (newLeftIndex >= 0) {
                while (field[newLeftIndex] === 1) {
                    newLeftIndex -= flyLength;
                }
                if (newLeftIndex >= 0) {
                    field[newLeftIndex] = 1;
                }
            }
            else{
                continue;
            }
        }
        else if (direction === "right") {
            let newRightIndex = ladyIndex + flyLength;
            if (newRightIndex < fieldSize) {
                while (field[newRightIndex] === 1) {
                    newRightIndex += flyLength;
                }
                if (newRightIndex < fieldSize) {
                    field[newRightIndex] = 1;
                }
            }
            else{
                continue;
            }
        }
    }
    console.log(field.join(" "));
}
solve([5, '3', '3 left 2', '1 left -2']);