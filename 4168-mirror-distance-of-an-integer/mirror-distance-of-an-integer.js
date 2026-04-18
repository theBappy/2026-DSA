var mirrorDistance = function (n) {
    const s = n.toString().split('').reverse().join('')
    const rev = parseInt(s, 10)
    return Math.abs(n - rev)
};