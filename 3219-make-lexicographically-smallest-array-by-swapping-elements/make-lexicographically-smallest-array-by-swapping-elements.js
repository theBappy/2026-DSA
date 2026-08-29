const lexicographicallySmallestArray = (A, limit) => {
    const sort = A.slice().sort((a, b) => a - b);
    const B = [];
    const map = new Map();
    let id = -1;

    for (let i = 0; i < sort.length; i++) {
        if (i === 0 || sort[i] - sort[i - 1] > limit) {
            B.push([]);
            id++;
        }

        B[id].push(sort[i]);
        map.set(sort[i], id);
    }

    const idx = new Int32Array(B.length);

    for (let i = 0; i < A.length; i++) {
        const cur = map.get(A[i]);
        A[i] = B[cur][idx[cur]];
        idx[cur]++;
    }

    return A;
};