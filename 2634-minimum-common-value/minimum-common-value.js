var getCommon = function (nums1, nums2) {
    const set1 = new Set(nums1)
    for (const num of nums2) {
        if (set1.has(num)) {
            return num
        }
    }
    return -1
};