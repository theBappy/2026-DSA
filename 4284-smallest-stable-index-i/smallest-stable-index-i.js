const firstStableIndex = (nums, k, pref = -1) => {
    const suf = [];
    nums.reduceRight((a, c, i) => suf[i] = Math.min(a, c), Infinity);
    return nums.findIndex((c, i) => (pref = Math.max(pref, c)) - suf[i] <= k);
};