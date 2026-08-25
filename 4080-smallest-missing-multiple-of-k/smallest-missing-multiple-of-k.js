const missingMultiple = (nums, k) => {
    let x = 0n;
    for (const n of nums)
        if (n % k === 0)
            x |= 1n << BigInt(n / k - 1);

    return (Math.log2(Number((x + 1n) & ~x)) + 1) * k;
};