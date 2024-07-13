function oddOccurrences(string) {
    let elementsObj = new Map();
    let arr = string.split(" ").map(word => word.toLowerCase());
    for (const curEl of arr) {
        if (elementsObj.has(curEl)) {
            elementsObj.set(curEl, elementsObj.get(curEl) + 1);
        }
        else {
            elementsObj.set(curEl, 1);
        }
    }
    let tuples = elementsObj.entries();
    let oddElementsArr = [];
    for (const curEl of tuples) {
        if (curEl[1] % 2 !== 0) {
            oddElementsArr.push(curEl[0]);
        }
    }
    console.log(oddElementsArr.join(" "));
}