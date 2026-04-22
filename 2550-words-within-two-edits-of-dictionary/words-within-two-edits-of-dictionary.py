class Solution:
    def twoEditWords(self, queries: List[str], dictionary: List[str]) -> List[str]:
        res = []
        for query in queries:
            for word in dictionary:
                hamming_dist = 0
                for i in range(len(query)):
                    if query[i] != word[i]:
                        hamming_dist += 1
                if hamming_dist <= 2:
                    res.append(query)
                    break
        return res
