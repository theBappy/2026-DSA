var equationsPossible = function (equations) {
    const parent = new Array(26).fill(0).map((_, i) => i)
    const rank = new Array(26).fill(1)

    const find = x => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    const union = (x, y) => {
        const px = find(x)
        const py = find(y)

        if (px !== py) {
            if (rank[px] > rank[py]) {
                parent[py] = px
            } else if (rank[px] < rank[py]) {
                parent[px] = py
            } else {
                parent[px] = py
                rank[py] += 1
            }
        }
    }
    for (const eq of equations) {
        if (eq[1] === '=') {
            const a = eq.charCodeAt(0) - 97
            const b = eq.charCodeAt(3) - 97
            union(a, b)
        }
    }
    for (const eq of equations) {
        if (eq[1] === '!') {
            const a = eq.charCodeAt(0) - 97
            const b = eq.charCodeAt(3) - 97
            if (find(a) === find(b)) {
                return false
            }
        }
    }
    return true
};