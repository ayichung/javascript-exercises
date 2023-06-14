const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    }
    rep_str = "";
    for(i=0; i<num; i++) {
        rep_str += str
    }
    return rep_str;
};

// Do not edit below this line
module.exports = repeatString;
