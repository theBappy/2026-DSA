var findMaxPathScore = function (edges, online, k) {
    const n = online.length;
    const g = Array.from({ length: n }, () => []);
    let l = Infinity,
        r = 0;

    for (const [u, v, w] of edges) {
        if (!online[u] || !online[v]) {
            continue;
        }
        g[u].push([v, w]);
        l = Math.min(l, w);
        r = Math.max(r, w);
    }

    const check = (mid) => {
        const dis = new Array(n).fill(Infinity);
        const pq = new PriorityQueue((a, b) => a[0] - b[0]);

        dis[0] = 0;
        pq.enqueue([0, 0]);

        while (!pq.isEmpty()) {
            const [d, u] = pq.dequeue();

            if (d > k) {
                return false;
            }
            if (u === n - 1) {
                return true;
            }
            if (d !== dis[u]) {
                continue;
            }

            for (const [v, w] of g[u]) {
                if (w < mid) {
                    continue;
                }
                const nd = d + w;
                if (nd < dis[v]) {
                    dis[v] = nd;
                    pq.enqueue([nd, v]);
                }
            }
        }
        return false;
    };

    if (!check(l)) {
        return -1;
    }

    while (l <= r) {
        const mid = (l + r) >> 1;
        if (check(mid)) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return r;
};