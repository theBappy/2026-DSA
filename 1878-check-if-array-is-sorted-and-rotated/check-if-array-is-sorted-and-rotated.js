var check = function (nums) {
    const n = nums.length
    const sortedArr = [...nums].sort((a, b) => a - b)

    for (let r = 0; r < n; r++) {
        isRotated = true
        for (let i = 0; i < n; i++) {
            if (sortedArr[i] !== nums[(i + r) % n]) {
                isRotated = false
                break
            }
        }
        if (isRotated) {
            return true
        }
    }
    return false
};