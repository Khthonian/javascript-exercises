const removeFromArray = function(array, ...removeArgs) {
    for (let i = 0; i < removeArgs.length; i++) {
        let key = array.indexOf(removeArgs[i]);

        if (key !== -1) {
            array.splice(key, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
