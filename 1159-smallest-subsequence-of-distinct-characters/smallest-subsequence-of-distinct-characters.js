const smallestSubsequence = s => {
    const fq = _.countBy(s);
    const vis = new Set();
    const stack = [];

    for (const c of s) {
        fq[c]--;

        if (vis.has(c)) continue;

        while (stack.at(-1) > c && fq[stack.at(-1)])
            vis.delete(stack.pop());

        stack.push(c);
        vis.add(c);
    }

    return stack.join``;
};