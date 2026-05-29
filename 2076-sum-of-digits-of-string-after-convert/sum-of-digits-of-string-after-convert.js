var getLucky = function (s, k) {
    let currentDigitSum = 0;

    // Step 1: Convert characters to numbers and perform the 1st transformation
    for (let i = 0; i < s.length; i++) {
        let alphabetPosition = s.charCodeAt(i) - 97 + 1; // 97 is ASCII for 'a'
        while (alphabetPosition > 0) {
            currentDigitSum += alphabetPosition % 10;
            alphabetPosition = Math.floor(alphabetPosition / 10);
        }
    }

    // Step 2: Perform the remaining k - 1 transformations
    k--;
    while (k > 0) {
        let nextDigitSum = 0;
        while (currentDigitSum > 0) {
            nextDigitSum += currentDigitSum % 10;
            currentDigitSum = Math.floor(currentDigitSum / 10);
        }
        currentDigitSum = nextDigitSum;
        k--;
    }

    return currentDigitSum;
};