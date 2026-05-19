var getCommon = function (nums1, nums2) {
    function binarySearch(target, nums) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                return true
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return false
    }
    for (const num of nums1) {
        if (binarySearch(num, nums2)) {
            return num
        }
    }
    return -1
};