const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let result = [];
    if (Array.isArray(members)) {
        members.forEach(name => {
            if (typeof name === 'string') {
                result.push(name.trim().toUpperCase()[0]);
            }
        });
    } else {
        return false;
    }
    return result.sort().join('');
};
