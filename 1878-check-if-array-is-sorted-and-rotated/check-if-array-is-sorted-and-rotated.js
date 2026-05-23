var check = function (nums) {
    const n = nums.length
    let peak = 0

    for (let i = 0; i < n; i++) {
        // use modulo to check the next element, wrapping around at the boundary
        if (nums[i] > nums[(i + 1) % n]) {
            peak++
        }
    }
    // returns true if there is 0 or 1 drop; false otherwise
    return peak <= 1
};