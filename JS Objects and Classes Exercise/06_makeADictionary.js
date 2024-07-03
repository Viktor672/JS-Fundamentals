function makeADictionary(arr) {
    let newObj = {};
    for (let i = 0; i < arr.length; i++) {
        let curJSON = arr[i];
        let curString = JSON.parse(curJSON);
        newObj = Object.assign(newObj, curString);
    }

    let sortedObj = Object.keys(newObj);
    sortedObj.sort((a, b) => a.localeCompare(b));
    for (const curObj of sortedObj) {
        let definition = newObj[curObj];
        console.log(`Term: ${curObj} => Definition: ${definition}`);
    }
}
