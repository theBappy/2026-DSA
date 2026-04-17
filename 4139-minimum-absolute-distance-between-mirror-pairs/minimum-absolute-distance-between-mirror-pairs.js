var minMirrorPairDistance = function (nums) {
    const reverseNum = (x) => {
        let rev = 0
        while (x > 0) {
            rev = rev * 10 + (x % 10)
            x = Math.floor(x / 10)
        }
        return rev
    }
    const lastSeen = new Map()
    let ans = Infinity
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        if (lastSeen.has(current)) {
            ans = Math.min(ans, i - lastSeen.get(current))
        }
        lastSeen.set(reverseNum(current), i)
    }
    return ans === Infinity ? -1 : ans
};