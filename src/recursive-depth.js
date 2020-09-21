const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let arrayLibrary = arr.filter(item => Array.isArray(item));
    for (let item of arrayLibrary) {
      let rec = this.calculateDepth(item) + 1;
      if (rec > count){
        count = rec;
      }
    }
    return count;
  }
};
/*calculateDepth(arr) {
      let arraysLibrary=arr.filter(item=>{
        return (Array.isArray(item))?true:false;
      });
      if(!arraysLibrary[0]){
        return 1;
      }
      let resultArray=arraysLibrary.map(item=>{
          let count=0;
          function rec(arr) {
            count++;
            if (Array.isArray(arr)) {
              for (let item of arr) {
                if (Array.isArray(item)) return rec(item);
              }
            }
            return count;
          }
          return rec(item);
      });
      return Math.max.apply(null,resultArray)+1;
    }*/