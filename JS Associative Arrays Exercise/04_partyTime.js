function partyTime(arr) {
    let vipGuestsArr = [];
    let regularGuestsArr = [];
    let invitedGuestsArr = arr.splice(0, arr.indexOf("PARTY"));
    arr.splice(0, 1);
    for (const curName of invitedGuestsArr) {
        if (curName.charAt(0).charCodeAt() >= 48 && curName.charAt(0).charCodeAt() <= 57) {
            vipGuestsArr.push(curName);
        }
        else {
            regularGuestsArr.push(curName);
        }
    }
    for (const curName of arr) {
        if (vipGuestsArr.includes(curName)) {
            vipGuestsArr.splice(vipGuestsArr.indexOf(curName), 1);
        }
        else if (regularGuestsArr.includes(curName)) {
            regularGuestsArr.splice(regularGuestsArr.indexOf(curName), 1);
        }
    }
    console.log(vipGuestsArr.length + regularGuestsArr.length);
    if (vipGuestsArr.length > 0) {
        console.log(vipGuestsArr.join("\n"));
    }
    if (regularGuestsArr.length > 0) {
        console.log(regularGuestsArr.join("\n"));
    }
}
partyTime(['7IK9Yo0h',

    '9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])