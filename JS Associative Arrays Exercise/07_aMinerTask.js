function aMinerTask(arr) {
    let resourcesObj = new Map();
    for (let i = 0; i < arr.length; i += 2) {
        let resources = arr[i];
        let quantity = Number(arr[i + 1]);
        if (resourcesObj.has(resources)) {
            resourcesObj.set(resources, resourcesObj.get(resources) + quantity);
        }
        else {
            resourcesObj.set(resources, quantity);
        }
    }
    let resourcesTuples = resourcesObj.entries();
    for (const curEl of resourcesTuples) {
        console.log(`${curEl[0]} -> ${curEl[1]}`);
    }
}
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);