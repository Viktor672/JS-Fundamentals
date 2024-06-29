function convertToObject(someJSON) {
    let person = JSON.parse(someJSON);
    let tuples = Object.entries(person);
    for (const tuple of tuples) {
        console.log(`${tuple.shift()}: ${tuple.shift()}`);
    }
}