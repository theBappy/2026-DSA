var rotatedDigits = function (n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        let check = i
        let isValid = true
        let hasChanged = false
        while (check > 0) {
            let digit = check % 10
            if (digit === 3 || digit === 4 || digit === 7) {
                isValid = false
                break
            } else if ([2, 5, 6, 9].includes(digit)) {
                hasChanged = true
            }
            check = Math.floor(check / 10)
        }
        if (isValid && hasChanged) count++
    }
    return count
};