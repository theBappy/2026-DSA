/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    // memoArr values:
    // 0: Rotates to itself (0, 1, 8)
    // 1: Rotates to a different valid number (contains 2, 5, 6, 9 and no invalid)
    // 2: Invalid (contains 3, 4, 7)
    const memoArr = new Int8Array(n + 1).fill(-1);
    memoArr[0] = 0;
    
    let count = 0;

    for (let i = 1; i <= n; i++) {
        let remainingPart = memoArr[Math.floor(i / 10)];
        
        // If the prefix is already invalid, the whole number is invalid
        if (remainingPart === 2) {
            memoArr[i] = 2;
            continue;
        }

        let digit = i % 10;
        let digitCheck;

        if (digit === 0 || digit === 1 || digit === 8) {
            digitCheck = 0; // Rotates to itself
        } else if (digit === 2 || digit === 5 || digit === 6 || digit === 9) {
            digitCheck = 1; // Rotates to a different valid digit
        } else {
            memoArr[i] = 2; // Invalid digit (3, 4, 7)
            continue;
        }

        // Logic:
        // If prefix and current digit both rotate to themselves, 
        // the whole number remains the same (memoArr = 0).
        // Otherwise, if at least one part creates a new valid number, 
        // it's a "Good" number (memoArr = 1).
        if (remainingPart === 0 && digitCheck === 0) {
            memoArr[i] = 0;
        } else {
            memoArr[i] = 1;
        }

        if (memoArr[i] === 1) {
            count++;
        }
    }

    return count;
};