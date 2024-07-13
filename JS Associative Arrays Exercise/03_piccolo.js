function piccolo(arr) {
    let carNumber = new Set();
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(", ");
        let command = tokens.shift();
        let number = tokens.shift();
        if (command === "IN") {
            carNumber.add(number);
        }
        else {
            carNumber.delete(number)
        }
    }
    let carNumberArr = [...carNumber];
    if (carNumberArr.length == 0) {
        console.log('Parking Lot is Empty');
        return;
    }
    carNumberArr.sort((a, b) => a.localeCompare(b));
    console.log(carNumberArr.join("\n"));
}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'IN, CA9999TT',
    
    'IN, CA2866HI',
    
    'OUT, CA1234TA',
    
    'IN, CA2844AA',
    
    'OUT, CA2866HI',
    
    'IN, CA9876HH',
    
    'IN, CA2822UU'])