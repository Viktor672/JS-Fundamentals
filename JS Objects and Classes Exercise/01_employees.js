function employees(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let nameLength = arr[i].length;
        let person = {
            name: arr[i],
            number: nameLength
        }
        newArr.push(person);
    }
    for (const curObj of newArr) {
        console.log(`Name: ${curObj.name} -- Personal Number: ${curObj.number}`);
    }
}
