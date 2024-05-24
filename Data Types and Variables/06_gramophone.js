function solve(bandName,albumname,songName) {
    let fullTimeForSong=(bandName.length*albumname.length)*songName.length/2;
    let rotations=fullTimeForSong/2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
solve('Black Sabbath', 'Paranoid',

'War Pigs');