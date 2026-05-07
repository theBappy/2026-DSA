var maxValue = function (nums) {
    const n = nums.length;

    const greaterInLeft = new Array(n); // greaterInLeft[i] = max element from index 0 to i
    const smallerInRight = new Array(n); // smallerInRight[i] = min element from i+1 to n

    greaterInLeft[0] = nums[0];
    smallerInRight[n - 1] = nums[n - 1];

    for (let i = 1; i < n; i++) {
        greaterInLeft[i] = Math.max(nums[i], greaterInLeft[i - 1]);
    }

    for (let i = n - 2; i >= 0; i--) {
        smallerInRight[i] = Math.min(nums[i], smallerInRight[i + 1]);
    }

    const ans = new Array(n);
    ans[n - 1] = greaterInLeft[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        if (greaterInLeft[i] <= smallerInRight[i + 1]) { // can't go to right
            ans[i] = greaterInLeft[i];
        } else { // greaterInLeft[i] > smallerInRight[i]
            ans[i] = ans[i + 1];
        }
    }
    return ans;
};