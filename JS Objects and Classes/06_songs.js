function songs(arr) {
    let numberOfSongs = arr.shift();
    let lastEl = arr.pop();
    let newArr = [];
    let finalArr = [];
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    for (let i = 0; i < numberOfSongs; i++) {
        let tokens = arr[i].split("_");
        let typeList = tokens.shift();
        let name = tokens.shift();
        let time = tokens.shift();
        let song = new Song(typeList, name, time);
        if (typeList === lastEl || lastEl === "all") {
            newArr.push(song);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        let tuples = Object.entries(newArr[i]);
        for (const tuple of tuples) {
            if (tuple[0] === "name")
                finalArr.push(tuple[1]);
        }
    }
    console.log(finalArr.join("\n"));

}