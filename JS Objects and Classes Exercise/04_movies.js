function movies(arr) {
    let arrLength = arr.length
    let newArr = [];
    for (let i = 0; i < arrLength; i++) {
        if (arr[i].includes("addMovie")) {
            let tokens = arr[i].split("addMovie ");
            let movie = {
                name: tokens[1]
            }
            newArr.push(movie);
        }
        else if (arr[i].includes("directedBy")) {
            let tokens = arr[i].split(" directedBy ");
            let name = tokens[0];
            let director = tokens[1];
            let nameObj = newArr.find(nameObj => nameObj.name == name);
            if (nameObj) {
                nameObj.director = director;
            }
        }
        else if (arr[i].includes("onDate")) {
            let tokens = arr[i].split(" onDate ");
            let name = tokens[0];
            let date = tokens[1];
            let nameObj = newArr.find(nameObj => nameObj.name == name);
            if (nameObj) {
                nameObj.date = date;
            }
        }
    }
    for (const curObj of newArr) {
        if (curObj.name && curObj.director && curObj.date) {
            console.log(JSON.stringify(curObj));
        }
    }
}
