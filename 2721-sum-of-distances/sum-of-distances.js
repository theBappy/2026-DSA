var distance = function (nums) {
    const n = nums.length;
    const arr = new Array(n).fill(0);

    const indexSum = new Map();
    const indexFreq = new Map();

    // left to right
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        const freq = indexFreq.get(num) || 0;
        const sum = indexSum.get(num) || 0;

        arr[i] += freq * i - sum;

        indexFreq.set(num, freq + 1);
        indexSum.set(num, sum + i);
    }

    indexSum.clear();
    indexFreq.clear();

    // right to left
    for (let i = n - 1; i >= 0; i--) {
        const num = nums[i];
        const freq = indexFreq.get(num) || 0;
        const sum = indexSum.get(num) || 0;

        arr[i] += sum - freq * i;

        indexFreq.set(num, freq + 1);
        indexSum.set(num, sum + i);
    }

    return arr;
};