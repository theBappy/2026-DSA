var maxJumps = function (arr, d) {
    const n = arr.length;
    // dp[i] stores the maximum jumps starting from index i
    const dp = new Array(n).fill(1);

    // create an array of objects holding the value and original index
    const sortedElements = arr.map((val, i) => ({ val, i }));
    // sort in ascending order by building height
    sortedElements.sort((a, b) => a.val - b.val);

    for (const element of sortedElements) {
        const i = element.i;

        // move Left
        for (let j = i - 1; j >= Math.max(0, i - d); j--) {
            // break: blocked by a building of equal or greater height
            if (arr[j] >= arr[i]) {
                break;
            }
            dp[i] = Math.max(dp[i], 1 + dp[j]);
        }

        // move Right
        for (let j = i + 1; j <= Math.min(n - 1, i + d); j++) {
            // break: blocked by a building of equal or greater height
            if (arr[j] >= arr[i]) {
                break;
            }
            dp[i] = Math.max(dp[i], 1 + dp[j]);
        }
    }

    // return the maximum value in the dp array
    return Math.max(...dp);
};