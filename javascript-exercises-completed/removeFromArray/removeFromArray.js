const removeFromArray = function(startingArray, ...args) {

 args.forEach(element => {
     let elementIndex = startingArray.indexOf(element);
     if (elementIndex > -1){
        startingArray.splice(elementIndex, 1);
     }  
 });
 
 return startingArray;
     
}

module.exports = removeFromArray
