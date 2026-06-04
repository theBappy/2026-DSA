class Solution:
    MAX_LIMIT = 100005
    waviness_counts = [0] * MAX_LIMIT
    prefix_sums = [0] * MAX_LIMIT

    for num in range(100, MAX_LIMIT):
        units_digit = num % 10
        tens_digit = (num // 10) % 10
        hundreds_digit = (num // 100) % 10  

        is_peak = tens_digit > max(units_digit, hundreds_digit)
        is_valley = tens_digit < min(units_digit, hundreds_digit)
        has_new_wave = int(is_peak or is_valley)

        waviness_counts[num] = waviness_counts[num // 10] + has_new_wave
        prefix_sums[num] = prefix_sums[num - 1] + waviness_counts[num]

    def totalWaviness(self, start_num: int, end_num: int) -> int:
        return self.prefix_sums[end_num] - self.prefix_sums[start_num - 1]