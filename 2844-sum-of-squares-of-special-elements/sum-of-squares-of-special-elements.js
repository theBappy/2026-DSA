var sumOfSquares = function(nums) {
    let ans = 0;
    const n = nums.length;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0)
            ans += nums[i - 1] * nums[i - 1];
    }
    return ans;
};