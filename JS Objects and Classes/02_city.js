function city(obj) {
    let tuples = Object.entries(obj);
    for (const tuple of tuples) {
        console.log(`${tuple.shift()} -> ${tuple.shift()}`);
    }
}

