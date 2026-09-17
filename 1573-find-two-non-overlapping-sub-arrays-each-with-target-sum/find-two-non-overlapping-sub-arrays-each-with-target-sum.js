const minSumOfLengths = (A, k) => {
    let n = A.length, res = n + 1;
    let sum = 0, i = 0;

    let dp = new Int32Array(n + 1).fill(n);

    for (let j = 0; j < n; j++) {
        sum += A[j];

        while (sum > k)
            sum -= A[i++];

        dp[j + 1] = dp[j];

        if (sum === k) {
            res = Math.min(res, j - i + 1 + dp[i]);
            dp[j + 1] = Math.min(dp[j], j - i + 1);
        }
    }

    return res === n + 1 ? -1 : res;
};