var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // Step 1: Determine which side is sorted
        if (nums[left] <= nums[mid]) {
            // Left side is sorted
            // Step 2: Check if target is within this sorted left side
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Target is here
            } else {
                left = mid + 1;  // Target is in the right half
            }
        } else {
            // Right side is sorted
            // Step 2: Check if target is within this sorted right side
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;  // Target is here
            } else {
                right = mid - 1; // Target is in the left half
            }
        }
    }

    return -1;
};