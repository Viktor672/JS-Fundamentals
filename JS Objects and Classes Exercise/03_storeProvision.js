function storeProvision(arr1, arr2) {
    let ownedProduct = "";
    let ownedQuantity = 0;
    let products = {};
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            ownedProduct = arr1[i];
            ownedQuantity = Number(arr1[i + 1]);
            products = {
                name: ownedProduct,
                number: ownedQuantity
            }
            newArr.push(products);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (i % 2 === 0) {
            let productToArrive = arr2[i];
            let quantityToArrive = Number(arr2[i + 1]);
            let product = newArr.find(product => product.name === productToArrive);
            if (product) {
                product.number += quantityToArrive;
            }
            else {
                newArr.push({ name: productToArrive, number: quantityToArrive });
            }
        }
    }
    for (const curObj of newArr) {
        console.log(`${curObj.name} -> ${curObj.number}`);
    }
}