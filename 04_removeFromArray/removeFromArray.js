const removeFromArray = function() {
    let arr = arguments[0];
    console.log(arr)
    for (i=1; i<arguments.length; i++) {
        let id = arr.indexOf(arguments[i]);
        if (id > -1) {
            arr.splice(id, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
