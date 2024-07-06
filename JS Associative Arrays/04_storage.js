function storage(arr) {
    let map = new Map();
    for (const curEl of arr) {
        let tokens = curEl.split(" ");
        let item = tokens.shift();
        let quantity = Number(tokens.shift());
        if (map.has(item)) {
            let curQuantity = map.get(item);
            map.set(item, curQuantity + quantity);
        }
        else {
            map.set(item, quantity);
        }
    }
    let entires = Array.from(map.entries());
    for (const curEl of entires) {
        console.log(`${curEl[0]} -> ${curEl[1]}`);
    }
}

