var maximumLength = function (nums) {
    const cnt = new Map();

    for (const num of nums) {
        cnt.set(num, (cnt.get(num) || 0) + 1);
    }
    const oneCnt = cnt.get(1) || 0;
    let ans = oneCnt % 2 ? oneCnt : oneCnt - 1;

    cnt.delete(1);

    for (const num of cnt.keys()) {
        let res = 0;
        let x = num;

        while (cnt.has(x) && cnt.get(x) > 1) {
            res += 2;
            x *= x;
        }

        ans = Math.max(ans, res + (cnt.has(x) ? 1 : -1));
    }

    return ans;
};