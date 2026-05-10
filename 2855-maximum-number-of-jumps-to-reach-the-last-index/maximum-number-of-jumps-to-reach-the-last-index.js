var maximumJumps = function (nums, target) {
    const n = nums.length
    let t = new Array(n + 1).fill(-1)
    t[n - 1] = 0

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(nums[j] - nums[i]) <= target && t[j] !== -1) {
                let temp = 1 + t[j]
                t[i] = Math.max(t[i], temp)
            }
        }
    }
    return t[0] < 0 ? -1 : t[0]
};