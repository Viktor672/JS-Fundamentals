function solve(givenRoom) {
    let roomsString = givenRoom[0];
    let rooms = roomsString.split("|");
    let health = 100;
    let coins = 0;
    let roomCount = 0;
    for (let i = 0; i < rooms.length; i++) {
        roomCount++;
        let room = rooms[i];
        let splitedRoom = room.split(" ");
        let text = splitedRoom[0];
        let number = Number(splitedRoom[1]);
        if (text === "potion") {
            if (health + number > 100) {
                number = 100 - health;
            }
            health += number;
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        else if (text === "chest") {
            coins += number;
            console.log(`You found ${number} coins.`);
        }
        else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${text}.`);
            }
            else if (health <= 0) {
                console.log(`You died! Killed by ${text}.`);
                console.log(`Best room: ${roomCount}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);