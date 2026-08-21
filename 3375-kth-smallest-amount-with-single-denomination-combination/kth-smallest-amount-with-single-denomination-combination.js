var findKthSmallest = function (coins, k) {
    coins.sort((a, b) => a - b);
    const n = coins.length;
    const m = 1 << n;

    let l = BigInt(k);
    let r = BigInt(coins[0]) * BigInt(k) + 1n;

    const bitCount = new Array(m).fill(0);
    const lcm = new Array(m).fill(0n);

    const gcd = (a, b) => {
        a = a < 0n ? -a : a;
        b = b < 0n ? -b : b;
        while (b !== 0n) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    for (let mask = 1; mask < m; mask++) {
        let curLcm = 1n;
        for (let i = 0; i < n; i++) {
            if ((mask >> i) & 1) {
                const coin = BigInt(coins[i]);
                const g = gcd(curLcm, coin);
                const tmp = curLcm / g;

                if (tmp <= r / coin) {
                    curLcm = tmp * coin;
                } else {
                    curLcm = r + 1n;
                    break;
                }
                bitCount[mask]++;
            }
        }
        lcm[mask] = curLcm;
    }

    const count = (x) => {
        let res = 0n;
        for (let mask = 1; mask < m; mask++) {
            if (lcm[mask] > x) continue;

            if (bitCount[mask] & 1) {
                res += x / lcm[mask];
            } else {
                res -= x / lcm[mask];
            }
        }
        return res;
    };

    while (l < r) {
        const mid = (l + r) / 2n;
        if (count(mid) >= BigInt(k)) {
            r = mid;
        } else {
            l = mid + 1n;
        }
    }

    return Number(l);
};