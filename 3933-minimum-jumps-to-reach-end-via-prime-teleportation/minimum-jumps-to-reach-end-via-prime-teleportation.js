var minJumps = function (nums) {
    const n = nums.length;
    if (n <= 1) return 0;

    const maxEl = Math.max(...nums);

    // 1. Sieve
    const isPrime = new Array(maxEl + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let p = 2; p * p <= maxEl; p++) {
        if (isPrime[p]) {
            for (let i = p * p; i <= maxEl; i += p)
                isPrime[i] = false;
        }
    }

    // 2. Map value to indices
    const valToIndices = new Map();
    for (let i = 0; i < n; i++) {
        if (!valToIndices.has(nums[i])) valToIndices.set(nums[i], []);
        valToIndices.get(nums[i]).push(i);
    }

    // 3. BFS
    let queue = [0];
    const visited = new Uint8Array(n);
    visited[0] = 1;
    const seenPrimes = new Set();
    let steps = 0;

    while (queue.length > 0) {
        let nextQueue = [];
        for (let currIdx of queue) {
            if (currIdx === n - 1) return steps;

            // Neighbors
            for (let neighbor of [currIdx - 1, currIdx + 1]) {
                if (neighbor >= 0 && neighbor < n && !visited[neighbor]) {
                    visited[neighbor] = 1;
                    nextQueue.push(neighbor);
                }
            }

            // Prime jumps
            const val = nums[currIdx];
            if (isPrime[val] && !seenPrimes.has(val)) {
                for (let m = val; m <= maxEl; m += val) {
                    if (valToIndices.has(m)) {
                        for (let nextIdx of valToIndices.get(m)) {
                            if (!visited[nextIdx]) {
                                visited[nextIdx] = 1;
                                nextQueue.push(nextIdx);
                            }
                        }
                    }
                }
                seenPrimes.add(val);
            }
        }
        queue = nextQueue;
        steps++;
    }
    return -1;
};