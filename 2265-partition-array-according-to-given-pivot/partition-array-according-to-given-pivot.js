var pivotArray = function (nums, pivot) {
    const n = nums.length
    const result = new Array(n)

    //original nums pointers
    let leftIdx = 0
    let rightIdx = n - 1

    //result array destinations pointers
    let resLeft = 0
    let resRight = n - 1

    while (leftIdx < n && rightIdx >= 0) {
        if (nums[leftIdx] < pivot) {
            result[resLeft] = nums[leftIdx]
            resLeft++
        }
        if (nums[rightIdx] > pivot) {
            result[resRight] = nums[rightIdx]
            resRight--
        }
        leftIdx++
        rightIdx--
    }
    //fill the remaining middle elements with pivot
    while (resLeft <= resRight) {
        result[resLeft] = pivot
        resLeft++
    }
    return result
};