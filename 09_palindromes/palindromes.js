const palindromes = function (string) {
    const str = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    const newStr = str.split("").reverse().join("");

    if (str === newStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
