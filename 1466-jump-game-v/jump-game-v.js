var maxJumps = function(arr, d) {
    const n = arr.length;
    const memo = new Array(n).fill(-1);
    
    function dfs(i) {
        if (memo[i] !== -1) return memo[i];
        
        let maxChildJumps = 0;
        
        for (let j = i - 1; j >= Math.max(0, i - d); j--) {
            if (arr[j] >= arr[i]) {
                break;
            }
            maxChildJumps = Math.max(maxChildJumps, dfs(j));
        }
        
        for (let j = i + 1; j <= Math.min(n - 1, i + d); j++) {
            if (arr[j] >= arr[i]) {
                break; 
            }
            maxChildJumps = Math.max(maxChildJumps, dfs(j));
        }
        
        memo[i] = 1 + maxChildJumps;
        return memo[i];
    }
    
    let maxTotalJumps = 0;
    for (let i = 0; i < n; i++) {
        maxTotalJumps = Math.max(maxTotalJumps, dfs(i));
    }
    
    return maxTotalJumps;
};