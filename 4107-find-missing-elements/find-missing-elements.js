var findMissingElements = function (nums) {
    const st = new Set(nums);
    const mn = Math.min(...nums);
    const mx = Math.max(...nums);

    const ans = [];
    for (let i = mn + 1; i < mx; i++) {
        if (!st.has(i)) {
            ans.push(i);
        }
    }
    return ans;
};