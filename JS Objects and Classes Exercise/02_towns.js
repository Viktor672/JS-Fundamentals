function towns(arr) {
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" | ");
        let name = tokens.shift();
        let latitude = Number(tokens.shift()).toFixed(2);
        let longitude = Number(tokens.shift()).toFixed(2);
        let town = {
            town: name,
            latitude,
            longitude
        }
        console.log(town);
    }
}
