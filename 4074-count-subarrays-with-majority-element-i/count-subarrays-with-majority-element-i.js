var countMajoritySubarrays = function (nums, target) {
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; i++) {
        let cnt = 0
        for (let j = i; j < n; j++) {
            cnt += nums[j] === target ? 1 : -1
            if (cnt > 0) {
                ans++
            }
        }
    }
    return ans
};