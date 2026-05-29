var minElement = function (nums) {
    let ans = 37;
    for (const num of nums) {
        let dig = 0
        let n = num
        while (n) {
            dig += n % 10
            n = Math.floor(n / 10)
        }
        ans = Math.min(ans, dig)
    }
    return ans
};