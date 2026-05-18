var minJumps = function (arr) {
    const n = arr.length; // last index -> n - 1

    const mp = new Map(); // number -> indices
    const visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (!mp.has(arr[i])) {
            mp.set(arr[i], []);
        }
        mp.get(arr[i]).push(i);
    }

    const q = [];
    q.push(0);
    visited[0] = true;

    let steps = 0;
    while (q.length > 0) {
        let size = q.length;
        while (size--) {
            const curr_idx = q.shift();

            const left = curr_idx - 1;
            const right = curr_idx + 1;

            if (curr_idx === n - 1) {
                return steps; // reach destination
            }

            if (left >= 0 && !visited[left]) {
                q.push(left);
                visited[left] = true;
            }
            if (right < n && !visited[right]) {
                q.push(right);
                visited[right] = true;
            }

            if (mp.has(arr[curr_idx])) {
                for (const idx of mp.get(arr[curr_idx])) {
                    if (!visited[idx]) {
                        q.push(idx);
                        visited[idx] = true;
                    }
                }
                // remove to avoid duplicate processing
                mp.delete(arr[curr_idx]);
            }
        }
        steps++;
    }
    return -1;
};