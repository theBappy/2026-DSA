const checkValidString = s => {
    let l = 0, h = 0;

    for (const c of s) {
        l += ((c == '(') << 1) - 1;
        h += ((c != ')') << 1) - 1;
        if (h < 0) return false;
        l = Math.max(l, 0);
    }

    return l === 0;
};