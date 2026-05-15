var findMin = function (nums) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        mid = left + Math.floor((right - left) / 2)

        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else if (nums[mid] < nums[right]) {
            right = mid
        } else {
            right -= 1
        }
    }
    return nums[right]
};