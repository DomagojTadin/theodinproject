const reverseString = function(forwardString) {
    let finalString = '';
    let forwardstringArray = [...forwardString];

    for(i=0; i<forwardString.length; i++){
        finalString = finalString + forwardstringArray.pop(i);
    } 

    return finalString;
}

module.exports = reverseString
