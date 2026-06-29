var numOfStrings = function(patterns, word) {
            let ans = 0;
        for (const s of patterns) {
            if (word.includes(s)) {
                ans++;
            }
        }
        return ans;
};