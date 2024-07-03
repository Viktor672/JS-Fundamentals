class Storage {
    capacity;
    storage;
    totalCost
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        let price = product.price * product.quantity;
        this.totalCost += price;
    }
    getProducts() {
        let arr = [];
        for (const curObj of this.storage) {
            arr.push(JSON.stringify(curObj));
        }
        return arr.join("\n");
    }
}

