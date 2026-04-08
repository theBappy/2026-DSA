/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
    const M = 1e9 + 7
    for (const query of queries) {
        let [l, r, k, v] = query
        while (l <= r) {
            nums[l] = (nums[l] * v) % M
            l += k
        }
    }
    let result = 0
    for (const num of nums) {
        result ^= num
    }
    return result
};