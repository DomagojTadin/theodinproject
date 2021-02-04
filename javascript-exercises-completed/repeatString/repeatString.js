const repeatString = function(initialString, times) {
    let finalString='';
    if (times<0){
        finalString='ERROR';
    } else {
        for(i=0; i<times; i++){
            finalString=finalString+initialString;
        }
    }
    console.log(finalString);
    return finalString;
}

module.exports = repeatString
