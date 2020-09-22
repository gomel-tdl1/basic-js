const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date) {
        if (Date.prototype.isPrototypeOf(date)&& !isNaN(date)) {

          let month=date.getMonth();
          return (month>=0&&month<2||month===11)?'winter':
              (month>=2&&month<5)?'spring':
                  (month>=5&&month<8)?'summer':
                      (month>=8&&month<11)?'autumn':'';

        } else {
            throw new Error('Invalid or spy Date');
        }
    } else {
        return 'Unable to determine the time of year!';
    }
};
