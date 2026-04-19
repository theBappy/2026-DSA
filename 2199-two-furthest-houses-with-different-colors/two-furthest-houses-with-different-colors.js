var maxDistance = function (colors) {
    const n = colors.length
    let res = 0

    for (let j = n - 1; j > 0; j--) {
        if (colors[0] !== colors[j]) {
            res = Math.max(res, j)
            break
        }
    }

    for (let i = 0; i < n - 1; i++) {
        if (colors[i] !== colors[n - 1]) {
            res = Math.max(res, n - 1 - i)
            break
        }
    }

    return res
};