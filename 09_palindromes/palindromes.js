const palindromes = function (str) {
    const processedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedString = processedString.split("").reverse().join("");
    return processedString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
