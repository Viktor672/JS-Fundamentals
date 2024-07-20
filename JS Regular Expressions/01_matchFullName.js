function matchFullName(string) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
    let validFullName = string.match(regex);
    console.log(validFullName.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov");