function solve(arr) {
    let gameProfile = arr[0].split(" ");
    for (let i = 1; i < arr.length; i++) {
        let curGame = arr[i].split(" ");
        let command = curGame[0];
        let game = curGame[1];
        if (command === "Play!") {
            break;
        }
        else if (command === "Install" && !gameProfile.includes(game)) {
            gameProfile.push(game);
        }
        else if (command === "Uninstall" && gameProfile.includes(game)) {
            let index = gameProfile.indexOf(game);
            gameProfile.splice(index, 1);
        }
        else if (command === "Update" && gameProfile.includes(game)) {
            let index = gameProfile.indexOf(game);
            gameProfile.splice(index, 1);
            gameProfile.push(game);
        }
        else if (command === "Expansion") {
            let expansion = game.split("-");
            let newExpansion = expansion.join(":");
            let curGameFromExpansion = expansion[0];
            if (gameProfile.includes(curGameFromExpansion)) {
                let index = gameProfile.indexOf(curGameFromExpansion);
                gameProfile.splice(index + 1, 0, newExpansion);
            }
        }
    }
    console.log(gameProfile.join(" "));
}
solve(['CS WoW Diablo',

    'Uninstall XCOM',

    'Update PeshoGame',

    'Update WoW',

    'Expansion Civ-V',

    'Play!']);