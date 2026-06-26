var countMajoritySubarrays = function (nums, target) {
    const n = nums.length;
    const pre = new Array(n * 2 + 1).fill(0);
    pre[n] = 1;
    let cnt = n;
    let ans = 0,
        presum = 0;
    for (let i = 0; i < n; ++i) {
        if (nums[i] === target) {
            presum += pre[cnt];
            ++cnt;
            ++pre[cnt];
        } else {
            --cnt;
            presum -= pre[cnt];
            ++pre[cnt];
        }
        ans += presum;
    }
    return ans;
};