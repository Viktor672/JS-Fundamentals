function phoneBook(arr) {
    let phoneObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" ");
        let name = tokens.shift();
        let phoneNumber = tokens.shift();
        phoneObj[name] = phoneNumber;
    }
    for (const key in phoneObj) {
        console.log(`${key} -> ${phoneObj[key]}`);
    }
}
