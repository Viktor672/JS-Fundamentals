function extractFile(string) {
    let fileArr = string.split("\\");
    let lastEl = fileArr.pop();
    let lastIndexOf = lastEl.lastIndexOf(".");
    let fileName = lastEl.substring(0, lastIndexOf);
    let extension = lastEl.substring(lastIndexOf + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');