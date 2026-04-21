var minimumHammingDistance = function(source, target, allowedSwaps) {
    const n = source.length;
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = new Array(n).fill(0);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        let px = find(x);
        let py = find(y);
        if (px === py) return;

        if (rank[px] > rank[py]) {
            parent[py] = px;
        } else if (rank[px] < rank[py]) {
            parent[px] = py;
        } else {
            parent[px] = py;
            rank[py]++;
        }
    }

    // 1. Union-Find to group indices
    for (const [u, v] of allowedSwaps) {
        union(u, v);
    }

    // 2. Map source values to their respective component roots
    const inventories = new Map(); // root -> Map(value -> count)

    for (let i = 0; i < n; i++) {
        const root = find(i);
        if (!inventories.has(root)) {
            inventories.set(root, new Map());
        }
        const inv = inventories.get(root);
        inv.set(source[i], (inv.get(source[i]) || 0) + 1);
    }

    let hammingDistance = 0;

    // 3. Compare with target
    for (let i = 0; i < n; i++) {
        const root = find(i);
        const targetVal = target[i];
        const inv = inventories.get(root);

        if (inv.has(targetVal) && inv.get(targetVal) > 0) {
            inv.set(targetVal, inv.get(targetVal) - 1);
        } else {
            hammingDistance++;
        }
    }

    return hammingDistance;
};