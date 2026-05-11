
var separateDigits = function (nums) {
    const resArr = []
    for (let i = nums.length - 1; i >= 0; i--) {
        let n = nums[i]
        while (n) {
            resArr.push(n % 10)
            n = Math.floor(n / 10)
        }
    }
    return resArr.reverse()
};