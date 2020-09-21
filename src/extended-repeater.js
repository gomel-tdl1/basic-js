const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.repeatTimes){
    let result=[];
    for(let i=0;i<options.repeatTimes;i++){
      if(options.addition||options.addition===false||options.addition===null){
        result.push(str+addition(options));
      }else{
        result.push(str);
      }
    }
    if(options.separator){
      return result.join(options.separator);
    }else{
      return result.join('+');
    }
  }else {
    if(options.addition||options.addition===false||options.addition===null){
      return str+addition(options);
    }else{
      return str;
    }
  }
};
function addition(obj) {
  if(obj.additionRepeatTimes){
    let addition=[];
    for(let i=0;i<obj.additionRepeatTimes;i++){
      addition.push(String(obj.addition));
    }
    if(obj.additionSeparator){
      return addition.join(obj.additionSeparator);
    }else{
      return addition.join('|');
    }
  }else{
    return String(obj.addition);
  }
}

  