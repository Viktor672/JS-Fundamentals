function starEnigma(arr) {
    let numberOfMsg = Number(arr.shift());
    let decryptedMsgArr = [];
    let starPattern = /[star]/gi;
    for (let i = 0; i < numberOfMsg; i++) {
        let msg = arr[i];
        let decryptedMsg = '';
        let match = msg.match(starPattern);
        if (match) {
            let countOfLetters = match.join("").length;
            for (let j = 0; j < msg.length; j++) {
                let curChar = msg[j];
                let curCharAsAscii = curChar.charCodeAt();
                curCharAsAscii -= countOfLetters;
                let newChar = String.fromCharCode(curCharAsAscii);
                decryptedMsg += newChar;
            }
        }
        else {
            decryptedMsg = msg
        }
        decryptedMsgArr.push(decryptedMsg);
    }
    let planetPatern = /@(?<name>[A-Za-z]+)[^@\-!:]*:(?<population>\d+)[^@\-!:]*!(?<type>[AD])![^@\-!:]*->(?<count>\d+)/;
    let attackedPlanetsArr = [];
    let destroyedPlanetsArr = [];
    for (const curDecryptedMsg of decryptedMsgArr) {
        let match = curDecryptedMsg.match(planetPatern);
        if (match) {
            let name = match.groups.name;
            let type = match.groups.type;
            if (type == 'A') {
                attackedPlanetsArr.push(name);
            }
            else {
                destroyedPlanetsArr.push(name);
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanetsArr.length}`);
    attackedPlanetsArr.sort((a, b) => a.localeCompare(b));
    for (const curPlanet of attackedPlanetsArr) {
        console.log(`-> ${curPlanet}`);
    }
    console.log(`Destroyed planets: ${destroyedPlanetsArr.length}`);

    destroyedPlanetsArr.sort((a, b) => a.localeCompare(b));
    for (const curPlanet of destroyedPlanetsArr) {
        console.log(`-> ${curPlanet}`);
    }
}
starEnigma(['2',

    'STCDoghudd4=63333$D$0A53333',

    'EHfsytsnhf?8555&I&2C9555SR']);