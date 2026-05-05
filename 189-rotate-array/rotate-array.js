var rotate = function(nums, k) {
    const n = nums.length
    k = k % n
    
    const reverse = (left, right) => {
        while(left < right){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
        }
    }
    reverse(0, n-1)
    reverse(0, k-1)
    reverse(k, n-1)
};