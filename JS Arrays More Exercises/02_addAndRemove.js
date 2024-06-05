function solve(arr) {
    let newArr = [];
    let command = "";
    for (let i = 0; i < arr.length; i++) {
        command = arr[i];
        if (command === 'add') {
            newArr.push(i + 1);
        }
        else if (command === "remove") {
            newArr.pop();
        }
    }
    if (newArr.length >= 1) {
        console.log(newArr.join(" "));
    }
    else {
        console.log("Empty");
    }
}
solve(['remove', 'remove', 'remove'])