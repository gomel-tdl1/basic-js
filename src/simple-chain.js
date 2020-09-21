const CustomError = require("../extensions/custom-error");

const chainMaker = {
    result: [],
    getLength() {
        return this.result.length;
    },
    addLink(value) {
        this.result.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position > 0 && position <= this.getLength() && typeof position === 'number' && Number.isInteger(position)) {
            this.result.splice(position - 1, 1);
        } else {
            this.result = [];
            throw new Error("incorrect position");
        }
        return this;
    },
    reverseChain() {
        this.result.reverse();
        return this;
    },
    finishChain() {
        let chain = this.result.slice();
        this.result = [];
        return chain.join('~~');
    }
};

module.exports = chainMaker;
