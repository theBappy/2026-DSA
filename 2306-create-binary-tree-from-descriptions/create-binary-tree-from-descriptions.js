var createBinaryTree = function (descriptions) {
    const mp = new Map()
    const childSet = new Set()

    for (const vec of descriptions) {
        const parent = vec[0]
        const child = vec[1]
        const isLeft = vec[2]

        if (!mp.has(parent)) {
            mp.set(parent, new TreeNode(parent))
        }
        if (!mp.has(child)) {
            mp.set(child, new TreeNode(child))
        }

        if (isLeft === 1) {
            mp.get(parent).left = mp.get(child)
        } else {
            mp.get(parent).right = mp.get(child)
        }
        childSet.add(child)
    }

    for (const vec of descriptions) {
        const parent = vec[0]
        if (!childSet.has(parent)) {
            return mp.get(parent)
        }
    }
    return null
};