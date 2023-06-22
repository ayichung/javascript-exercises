const findTheOldest = function(arr) {
    const oldest = arr.reduce((oldest, cur) => {
        const date = new Date();
        if (cur.yearOfDeath == undefined) { curAge = date.getFullYear() - cur.yearOfBirth; }
        else { curAge = cur.yearOfDeath - cur.yearOfBirth; }
        if (oldest.yearOfDeath == undefined) { oldestAge = date.getFullYear() - oldest.yearOfBirth; }
        else { oldestAge = oldest.yearOfDeath - oldest.yearOfBirth; }
        if (curAge > oldestAge) {
            return cur;
        }
        return oldest;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
