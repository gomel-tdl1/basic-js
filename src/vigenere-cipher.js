const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type) {
        this.type = type;
    }

    encrypt(message, key) {
        if (message && key) {

            let count=0;
            let messageArray = message.trim().toLowerCase().split('');
            let keyArray = key.trim().repeat(Math.ceil(message.length / key.length)).toLowerCase().split('');
            let result = messageArray.map((item, index) => {
                if (/[a-z]/.test(item)) {
                    let itemCode = item.charCodeAt(0) - 97;
                    let keyItemCode = keyArray[count++].charCodeAt(0) - 97;
                    let sum = itemCode + keyItemCode;
                    if (sum >= 0 && sum < 26) {
                        return String.fromCharCode(sum + 97);
                    } else if (sum > 25) {
                        return String.fromCharCode(sum - 26 + 97);
                    }
                } else {
                    return item;
                }
            });
            if (this.type === false) {
                return result.reverse().join('').toUpperCase();
            } else {
                return result.join('').toUpperCase();
            }

        } else {
            throw new Error('Message or key are not defined')
        }
    }

    decrypt(message, key) {
        if (message && key) {

            let count=0;
            let messageArray = message.trim().toLowerCase().split('');
            let keyArray = key.trim().repeat(Math.ceil(message.length / key.length)).toLowerCase().split('');
            let result = messageArray.map((item, index) => {
                if (/[a-z]/.test(item)) {
                    let itemCode = item.charCodeAt(0) - 97;
                    let keyItemCode = keyArray[count++].charCodeAt(0) - 97;
                    let raz = itemCode - keyItemCode;
                    if (raz >= 0 && raz < 26) {
                        return String.fromCharCode(raz + 97);
                    } else if (raz < 0) {
                        return String.fromCharCode(raz + 26 + 97);
                    }
                } else {
                    return item;
                }
            });
            if (this.type === false) {
                return result.reverse().join('').toUpperCase();
            } else {
                return result.join('').toUpperCase();
            }

        } else {
            throw new Error('Message or key are not defined')
        }
    }
}

module.exports = VigenereCipheringMachine;
