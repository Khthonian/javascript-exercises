const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    
    let a = 1, b = 0, c;
    number--;

    while (number >= 0) {
        c = a;
        a = a + b;
        b = c;
        number--;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
