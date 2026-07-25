var maxProduct = function (n) {
    let first = 0,
        second = 0;
    while (n > 0) {
        let x = n % 10;
        if (x > first) {
            second = first;
            first = x;
        } else if (x > second) {
            second = x;
        }
        n = Math.floor(n / 10);
    }
    return first * second;
};