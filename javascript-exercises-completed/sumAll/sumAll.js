const sumAll = function(first, last) {
let finalSum = 0;
let max = 0;
let min = 0;

if (first < 0 || last < 0 || typeof first !== "number" || typeof last !== "number"){
    return 'ERROR';
}

if ( first >= last){
    max = first;
    min = last;
} else {
    max = last;
    min = first;
}

for(i = max; i >= min; i--){
    finalSum = finalSum + i;
}

return finalSum;
}

module.exports = sumAll
