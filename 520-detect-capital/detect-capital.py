class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        return len(word) == 1 or word[1:].islower() or word.isupper()
