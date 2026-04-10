var minimumDistance = function (nums) {
    const pos = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!pos.has(nums[i])) {
            pos.set(nums[i], [])
        }
        pos.get(nums[i]).push(i)
    }
    let ans = Infinity
    for (const [val, indices] of pos.entries()) {
        if (indices.length >= 3) {
            for (let i = 0; i <= indices.length - 3; i++) {
                ans = Math.min(ans, 2 * (indices[i + 2] - indices[i]))
            }
        }
    }
    return ans === Infinity ? -1 : ans
};