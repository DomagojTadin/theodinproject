const leapYears = function(year) {
    
    if(year % 100 === 0 && year % 400 !== 0){
        console.log("false");
        return false;
    } 

    if(year % 4 !== 0){
        console.log('false');
        return false;
    }

    console.log('true')
    return true;  
}

module.exports = leapYears
