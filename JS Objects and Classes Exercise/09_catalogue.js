function catalogue(arr) {
    let catalogueArr = [];
    class Catalogue {
        product;
        price;
        constructor(product, price) {
            this.product = product;
            this.price = price;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" : ");
        let product = tokens.shift();
        let price = Number(tokens.shift());
        let catalogueObj = new Catalogue(product, price);
        catalogueArr.push(catalogueObj);
    }
    let sortedArr = catalogueArr.sort((a, b) => a.product.localeCompare(b.product));
    let curLetter = "";
    for (const curObj of sortedArr) {
        if (curObj.product.charAt(0).toUpperCase() === curLetter) {
            console.log(` ${curObj.product}: ${curObj.price}`);
        }
        else {
            curLetter = curObj.product.charAt(0).toUpperCase();
            console.log(curLetter);
            console.log(` ${curObj.product}: ${curObj.price}`);
        }
    }
}