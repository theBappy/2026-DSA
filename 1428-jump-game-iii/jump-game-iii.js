var canReach = function (arr, start) {
    const n = arr.length;

    function dfs(i) {
        if (i < 0 || i >= n || arr[i] < 0) {
            return false
        }
        if (arr[i] === 0) {
            return true
        }
        arr[i] *= -1
        const left = dfs(i + arr[i])
        const right = dfs(i - arr[i])

        return left || right
    }

    return dfs(start)
};