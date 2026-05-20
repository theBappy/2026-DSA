var findThePrefixCommonArray = function (A, B) {
    const n = A.length
    const result = new Array(n)
    for (let i = 0; i < n; i++) {
        let count = 0
        for (let A_i = 0; A_i <= i; A_i++) {
            for (let B_i = 0; B_i <= i; B_i++) {
                if (A[A_i] === B[B_i]) {
                    count++
                    break
                }
            }
        }
        result[i] = count
    }
    return result
};