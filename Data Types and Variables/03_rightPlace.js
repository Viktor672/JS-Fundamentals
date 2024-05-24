function solve(string1,char,string2){
    let result="";
for(let i=0;i<string1.length;i++){
    let word=string1[i]
    if(word==="_"){
result+=char;
    }
    else{
        result+=word;
    }
}
if(result===string2){
    console.log("Matched");
}
else{
    console.log("Not Matched");
}
}
solve('Str_ng', 'i',

'String');