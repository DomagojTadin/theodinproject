
const ftoc = function(temp) {
  let ftocTemp = ((temp-32)*(5/9));
  if(ftocTemp % 1 !== 0 ){
    ftocTemp = Math.round(ftocTemp*10)/10;
    return ftocTemp;
  }
  return ftocTemp;
}

const ctof = function(temp) {
  let ctofTemp = ((temp*(9/5))+32);
  if (ctofTemp % 1 !== 0){
    ctofTemp = Math.round(ctofTemp*10)/10;
    return ctofTemp;
  }
  return ctofTemp;
}

module.exports = {
  ftoc,
  ctof
}
