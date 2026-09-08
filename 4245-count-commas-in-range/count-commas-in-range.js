var countCommas = function (n) {
    let res = 0;
    for (let a = 1; a <= n; ++a) {
        if (a > 999) {
            res += 1;
        }
    }
    return res;
};