var numberOfSpecialChars = function (word) {
    const lastLower = Array(26).fill(-1);
    const firstUpper = Array(26).fill(-1);

    const n = word.length;
    for (let i = 0; i < n; i++) {
        const ch = word[i];
        if (ch >= 'a' && ch <= 'z') {
            lastLower[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = i;
        } else {
            const idx = ch.charCodeAt(0) - 'A'.charCodeAt(0);
            if (firstUpper[idx] === -1) {
                firstUpper[idx] = i;
            }
        }
    }

    let res = 0;
    for (let i = 0; i < 26; i++) {
        if (lastLower[i] !== -1 && firstUpper[i] !== -1 && lastLower[i] < firstUpper[i]) {
            res++;
        }
    }
    return res;
}