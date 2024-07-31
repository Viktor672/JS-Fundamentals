function bakeryShop(arr) {
    let foodObj = {};
    let soldFoodObj = {};
    let command = arr.shift();
    while (command != "Complete") {
        let tokens = command.split(" ");
        let [action, quantity, food] = tokens;
        quantity = Number(quantity);
        if (action == "Receive") {
            if (quantity < 0) {
                command = arr.shift();
                continue;
            }
            if (food in foodObj) {
                foodObj[food] += quantity;
            }
            else {
                foodObj[food] = quantity;
            }
        }
        else if (action == "Sell") {
            if (!(food in foodObj)) {
                console.log(`You do not have any ${food}.`);
            }
            else {
                if (quantity > foodObj[food]) {
                    console.log(`There aren't enough ${food}. You sold the last ${foodObj[food]} of them.`);
                    if ((food in soldFoodObj)) {
                        soldFoodObj[food] += foodObj[food]
                    }
                    else {
                        soldFoodObj[food] = foodObj[food];
                    }
                    delete foodObj[food];
                }
                else {
                    console.log(`You sold ${quantity} ${food}.`);
                    foodObj[food] -= quantity;
                    if ((food in soldFoodObj)) {
                        soldFoodObj[food] += quantity
                    }
                    else {
                        soldFoodObj[food] = quantity;
                    }
                    if (foodObj[food] == 0) {
                        delete foodObj[food];
                    }
                }
            }
        }
        command = arr.shift();
    }
    let soldFoodSum = 0;
    for (const food in soldFoodObj) {
        soldFoodSum += soldFoodObj[food]
    }
    for (const food in foodObj) {
        console.log(`${food}: ${foodObj[food]}`);
    }
    console.log(`All sold: ${soldFoodSum} goods`);
}
bakeryShop([
    'Receive 105 cookies',
    'Receive 10 donuts',
    'Sell 10 donuts',
    'Sell 1 bread',
    'Complete']);
