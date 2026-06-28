const maximumElementAfterDecrementingAndRearranging = A => {
    A.sort((a, b) => a - b);
    const n = A.length;

    A[0] = 1;
    for (let i = 1; i < n; i++)
        A[i] = Math.min(A[i], A[i - 1] + 1);
    
    return A.at(-1);
};