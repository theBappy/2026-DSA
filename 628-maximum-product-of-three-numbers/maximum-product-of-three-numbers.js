const maximumProduct = A => {
    A.sort((a, b) => a - b);

    return Math.max(
        A.at(-1) * A.at(-2) * A.at(-3), 
        A.at(-1) * A[0] * A[1]
    );
};