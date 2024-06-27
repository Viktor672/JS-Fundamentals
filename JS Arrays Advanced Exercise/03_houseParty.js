function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" ");
        let name = tokens[0];
        if (tokens.includes("not")) {
            if (newArr.includes(name)) {
                let indexOf = newArr.indexOf(name);
                newArr.splice(indexOf, 1);
            }
            else {
                console.log(`${name} is not in the list!`);
            }
        }
        else {
            if (!newArr.includes(name)) {
                newArr.push(name);
            }
            else {
                console.log(`${name} is already in the list!`);
            }
        }
    }
    console.log(newArr.join("\n"));
}
solve(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!']);