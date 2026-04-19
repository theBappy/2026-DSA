var maximumDifference = function (nums) {
    const n = nums.length
    let res = -1, min_element = nums[0]
    for (let i = 1; i < n; i++) {
        if (nums[i] > min_element) {
            res = Math.max(res, nums[i] - min_element)
        } else {
            min_element = nums[i]
        }
    }
    return res
};