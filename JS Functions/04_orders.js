function solve(product, quantity) {
    function getPrice(product, quantity) {
        let price = 0;
        if (product === "coffee") {
            price = 1.5 * quantity;
        }
        else if (product === "water") {
            price = quantity;
        }
        else if (product === "coke") {
            price = 1.4 * quantity;
        }
        else if (product === "snacks") {
            price = 2 * quantity;
        }
        return (price.toFixed(2));
    }
    console.log(getPrice(product, quantity));
}
solve("coffee", 2);