function extractEmails(string) {
    let pattern = /[ ][a-z0-9]+[\.\-_]?[a-z0-9]+@[a-z0-9]+[\-]?[a-z0-9]+(\.[a-z0-9]+[\-]?[a-z0-9])+/g;
    let mathces = string.matchAll(pattern);
    for (const curEl of mathces) {
        console.log(curEl[0]);
    }
}
extractEmails('Please contact us at: support@github.com.');