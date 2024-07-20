function matchDates(arr) {
    let string = arr.join(", ");
    let regex = /\b(?<day>[0-9]{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>[0-9]{4})\b/gm;
    let matchedDates = string.matchAll(regex);
    for (const curEl of matchedDates) {
        let day = curEl.groups['day'];
        let month = curEl.groups['month'];
        let year = curEl.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);