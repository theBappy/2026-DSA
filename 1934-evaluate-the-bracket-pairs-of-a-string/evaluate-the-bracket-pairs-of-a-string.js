const evaluate = (s, K) => {
    const d = new Map(K);
    let res = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            const j = s.indexOf(")", i + 1);
            const t = s.slice(i + 1, j);

            res += d.get(t) ?? "?";
            i = j;
        } else
            res += s[i];
    }

    return res;
};