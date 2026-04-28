var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b)
    const median = nums[Math.floor(nums.length / 2)]

    return nums.reduce((total, val) => {
        return total + Math.abs(val - median)
    }, 0)
};