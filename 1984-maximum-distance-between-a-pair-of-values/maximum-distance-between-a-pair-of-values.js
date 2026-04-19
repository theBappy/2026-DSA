var maxDistance = function (nums1, nums2) {
    const m = nums1.length
    const n = nums2.length
    let i = 0, j = 0
    let result = 0
    while (i < m && j < n) {
        if (nums1[i] > nums2[j]) {
            i++
        } else {
            result = Math.max(result, j - i)
            j++
        }
    }
    return result
};