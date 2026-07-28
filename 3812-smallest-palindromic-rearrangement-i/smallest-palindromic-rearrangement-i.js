var smallestPalindrome = function (s) {
    const partition = Math.floor(s.length / 2);
    const bucket = new Int32Array(26);

    for (let i = 0; i < partition; i++) {
        bucket[s.charCodeAt(i) - 97] += 1;
    }

    let left = "";
    let right = "";
    for (let i = 0; i < 26; i++) {
        if (bucket[i] > 0) {
            left += String.fromCharCode(i + 97).repeat(bucket[i]);
            right = String.fromCharCode(i + 97).repeat(bucket[i]) + right;
        }
    }

    const mid = s.length % 2 !== 0 ? s[partition] : "";

    return left + mid + right;
};