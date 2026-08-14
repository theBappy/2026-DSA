const maximumLengthSubstring = s => {
    let res = 0;
    let fq = Array(26).fill(0);

    for (let l = 0, r = 0; r < s.length; r++) {
        fq[s.charCodeAt(r) - 97]++;

        while (fq[s.charCodeAt(r) - 97] > 2)
            fq[s.charCodeAt(l++) - 97]--;

        res = Math.max(res, r - l + 1);
    }

    return res;
};