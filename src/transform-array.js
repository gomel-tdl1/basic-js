const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let edit = arr.slice();
        edit.forEach((item, index) => {
            switch (item) {
                case '--discard-next':
                    if (edit[index + 1] !== undefined) {
                        delete edit[index + 1];
                    }
                    delete edit[index];
                    break;
                case '--discard-prev':
                    if (edit[index - 1] !== undefined) {
                        delete edit[index - 1];
                    }
                    delete edit[index];
                    break;
                case '--double-next':
                    if (edit[index + 1] !== undefined) {
                        edit[index] = edit[index + 1];
                    } else {
                        delete edit[index];
                    }
                    break;
                case '--double-prev':
                    if (edit[index - 1] !== undefined) {
                        edit[index] = edit[index - 1];
                    } else {
                        delete edit[index];
                    }
                    break;
            }
        });
        return edit.filter((item) => {
            return (item !== undefined) ? true : false;
        });
    } else {
        throw new Error('not array');
    }
};
