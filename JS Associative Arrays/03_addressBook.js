function addressBook(arr) {
    let adressObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(":");
        let name = tokens.shift();
        let adress = tokens.shift();
        adressObj[name] = adress;
    }
    let keys = Object.keys(adressObj);
    let sortedKeys = keys.sort((a, b) => a.localeCompare(b));
    for (const curEl of sortedKeys) {
        console.log(`${curEl} -> ${adressObj[curEl]}`);
    }
}
