const longestSubsequence = nums => {
    let tot = 0, nonZero = 0;

    for (const n of nums) {
        nonZero |= n > 0;
        tot ^= n;
    }

    return nonZero * (nums.length - !tot);
};