class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        n = len(nums)
        result = [0] * n

        # original nums pointers
        left_idx = 0
        right_idx = n - 1

        # result array destinations pointers
        res_left = 0
        res_right = n - 1

        while left_idx < n and right_idx >= 0:
            if nums[left_idx] < pivot:
                result[res_left] = nums[left_idx]
                res_left += 1
            if nums[right_idx] > pivot:
                result[res_right] = nums[right_idx]
                res_right -= 1

            left_idx += 1
            right_idx -= 1

        # fill the remaining middle elements with pivot
        while res_left <= res_right:
            result[res_left] = pivot
            res_left += 1

        return result
