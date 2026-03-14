var getHappyString = function(n, k) {
    const sz = 3 * (1 << (n - 1));
    if (k > sz) return "";

    const base = 1 << (n - 1);
    const q = Math.floor((k - 1) / base);
    const r = (k - 1) % base;

    const s = new Array(n);
    s[0] = String.fromCharCode('a'.charCodeAt(0) + q);

    const xx = [
        ['b', 'c'],
        ['a', 'c'],
        ['a', 'b']
    ];

    for (let i = n - 2; i >= 0; i--) {
        const idx = s[n - 2 - i].charCodeAt(0) - 'a'.charCodeAt(0);
        const bit = (r >> i) & 1;
        s[n - 1 - i] = xx[idx][bit];
    }

    return s.join("");
};