var leftRightDifference = function (nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0)
    const result = new Array(nums.length)

    let curr = 0
    for (let i = 0; i < nums.length; i++) {
        const leftSum = curr
        curr += nums[i]
        const rightSum = sum - curr
        result[i] = Math.abs(rightSum - leftSum)
    }
    
    return result
};