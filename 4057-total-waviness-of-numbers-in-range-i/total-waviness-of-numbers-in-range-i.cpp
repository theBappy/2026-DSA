class Solution {
private:
    static const int MAX_LIMIT = 100005;
    static std::vector<int> waviness_counts;
    static std::vector<int> prefix_sums;
    static bool is_initialized;
    static void precompute() {
        if (is_initialized)
            return;

        waviness_counts.assign(MAX_LIMIT, 0);
        prefix_sums.assign(MAX_LIMIT, 0);

        for (int num = 100; num < MAX_LIMIT; ++num) {
            int units_digit = num % 10;
            int tens_digit = (num / 10) % 10;
            int hundreds_digit = (num / 100) % 10;

            bool is_peak = tens_digit > std::max(units_digit, hundreds_digit);
            bool is_valley = tens_digit < std::min(units_digit, hundreds_digit);
            int has_new_wave = (is_peak || is_valley) ? 1 : 0;

            waviness_counts[num] = waviness_counts[num / 10] + has_new_wave;
            prefix_sums[num] = prefix_sums[num - 1] + waviness_counts[num];
        }
        is_initialized = true;
    }

public:
    int totalWaviness(int start_num, int end_num) {
        precompute();
        return prefix_sums[end_num] - prefix_sums[start_num - 1];
    }
};
// Define static members outside the class
std::vector<int> Solution::waviness_counts;
std::vector<int> Solution::prefix_sums;
bool Solution::is_initialized = false;