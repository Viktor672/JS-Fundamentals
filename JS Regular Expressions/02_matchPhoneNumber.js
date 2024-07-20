function matchPhoneNumber(arr) {
    let string=arr.join(', ');
    let regex= /(\+359 2 \d{3} \d{4}\b)|(\+359-2-\d{3}-\d{4}\b)/g;
    let result=string.match(regex);
    console.log(result.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);