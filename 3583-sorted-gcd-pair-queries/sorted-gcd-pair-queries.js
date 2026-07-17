const gcdValues = (A, queries) => {
    const max = _.max(A);
    const freq = new Int32Array(max + 1);
    const GCD = new Float64Array(max + 1);

    for (const a of A) freq[a]++;

    for (let i = max; i > 0; i--) {
        let sum = 0, extra = 0;
        for (let j = i; j <= max; j += i) {
            sum += freq[j];
            extra += GCD[j];
        }
        GCD[i] = (sum * (sum - 1)) / 2 - extra;
    }

    for (let i = 1; i <= max; i++) GCD[i] += GCD[i - 1];

    return queries.map(q => _.sortedLastIndex(GCD, q));
};