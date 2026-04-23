class Solution:
    def getDistances(self, arr: List[int]) -> List[int]:
        n = len(arr)
        res_arr = [0] * n

        indexSum = defaultdict(int)
        indexFreq = defaultdict(int)

        for i in range(n):
            freq = indexFreq[arr[i]]
            sum_ = indexSum[arr[i]]

            res_arr[i] += freq * i - sum_

            indexFreq[arr[i]] += 1
            indexSum[arr[i]] += i

        indexFreq.clear()
        indexSum.clear()

        for i in range(n - 1, -1, -1):
            freq = indexFreq[arr[i]]
            sum_ = indexSum[arr[i]]

            res_arr[i] += sum_ - freq * i

            indexFreq[arr[i]] += 1
            indexSum[arr[i]] += i

        return res_arr