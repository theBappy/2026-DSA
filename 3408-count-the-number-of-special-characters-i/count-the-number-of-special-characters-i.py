class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        st = set(word)
        count = 0

        for ch in st:
            if ch.isupper() and ch.lower() in st:
                count += 1
        return count
