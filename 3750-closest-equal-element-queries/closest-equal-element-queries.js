var solveQueries = function (nums, queries) {
    const n = nums.length
    const indices = new Map()
    for (let i = 0; i < n; i++) {
        if (!indices.has(nums[i])) {
            indices.set(nums[i], [])
        }
        indices.get(nums[i]).push(i)
    }
    const ans = new Array(n).fill(-1)

    for (const idx of indices.values()) {
        const m = idx.length
        if (m === 1) continue;

        for (let i = 0; i < m; i++) {
            const curr = idx[i]

            const prev_idx = idx[(i - 1 + m) % m]
            const next_idx = idx[(i + 1) % m]

            let prevIdxDist = Math.abs(curr - prev_idx)
            prevIdxDist = Math.min(prevIdxDist, n - prevIdxDist)

            let nextIdxDist = Math.abs(curr - next_idx)
            nextIdxDist = Math.min(nextIdxDist, n - nextIdxDist)

            ans[curr] = Math.min(prevIdxDist, nextIdxDist)
        }
    }
    return queries.map(idx => ans[idx])
};