const mod = 1e9 + 7;

const zigZagArrays = (n, l, r) => {
    const m = r - l + 1;
    const dp = Array(m).fill(1);

    for (let i = 2; i <= n; i++) {
        dp.reverse();
        let sum = 0;
        for (let j = 0; j < m; j++)
            [dp[j], sum] = [sum, (sum + dp[j]) % mod];
    }

    return (dp.reduce((a, c) => (a + c) % mod, 0) << 1) % mod;
};