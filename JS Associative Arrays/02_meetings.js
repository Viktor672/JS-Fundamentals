function meetings(arr) {
    let meetingObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" ");
        let dayOfWeek = tokens.shift();
        let name = tokens.shift();
        if (meetingObj.hasOwnProperty(dayOfWeek)) {
            console.log(`Conflict on ${dayOfWeek}!`);
        }
        else {
            console.log(`Scheduled for ${dayOfWeek}`);
            meetingObj[dayOfWeek] = name;
        }
    }
    let tuples = Object.entries(meetingObj);
    for (const curEl of tuples) {
        console.log(`${curEl[0]} -> ${curEl[1]}`);
    }
}
