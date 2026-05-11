/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        let num = i;
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (sum % 2 === 0) {
            count++;
        }
    }
    return count;
};