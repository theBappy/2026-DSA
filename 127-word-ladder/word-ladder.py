from collections import deque

class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordSet = set(wordList)
        if endWord not in wordSet:
            return 0

        queue = deque([beginWord])
        steps = 1

        while queue:
            # Process all words at the current level
            for _ in range(len(queue)):
                word = queue.popleft()

                if word == endWord:
                    return steps

                # Try all possible one-letter mutations
                for i in range(len(word)):
                    for char_code in range(97, 123):  # 'a' through 'z'
                        char = chr(char_code)
                        new_word = word[:i] + char + word[i + 1 :]

                        if new_word in wordSet:
                            queue.append(new_word)
                            wordSet.remove(new_word)  # Mark as visited

            steps += 1

        return 0
