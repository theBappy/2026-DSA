/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length
    k = k % n
    const rotated = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i]
    }
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i]
    }
};