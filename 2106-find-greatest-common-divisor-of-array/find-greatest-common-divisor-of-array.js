var findGCD = function (nums) {
    let mx = Math.max(...nums)
    let mn = Math.min(...nums)
    return gcd(mx, mn)
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b]
    }
    return a
}